const User = require("../models/user.model.js");
const imagekit = require('../config/imagekit.config')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Create and Save a new User
exports.create = (req, res) => {
    //Validate request
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    console.log(req.body)

    //create a User
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    })


    //save User in database
    User.create(newUser, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new user"
            })
        else
            res.send(data)
    })
};

// Retrieve all Destinations from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name

    User.getAll(name, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving users"
            })
        else
            res.send(data)
    })
};

// Find a single User with a id
exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.id
                })
            }
        }else
            res.send(data)
    })
};

exports.findBy = (req,res) => {
    User.findBy(req.body,req.body.field, (err,data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with ${req.body.field}`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.id
                })
            }
        }else
            res.send(data)
    })
}

exports.updatePassword = (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }

    User.findPasswordById(req.userId, async(err,data) => {
        if(err?.kind){
            res.status(400).send({
                type: 'Invalid Id',
                message: "Id is invalid"
            })
        }else if(err){
            res.status(500).send({
                message: err.message || "Some error occured while updating password"
            })
        }
        else{
            console.log(data)
            const validPass = await bcrypt.compare(req.body.currentpassword,data[0].password)
            if(!validPass){
                console.log('invalid password')
                res.status(400).send({
                    message: 'current password is invalid'
                })
            }else{
                const salt = await bcrypt.genSalt(10)
                const hasPassword = await bcrypt.hash(req.body.newpassword, salt)
                User.updatePassword(req.userId,hasPassword, async(err, data) => {
                    if(err){
                        res.status(500).send({
                            message: err.message || "Some error occured while updating password"
                        })
                    }

                    res.status(200).send({message: 'Password updated successfully'})
                })
            }
        }
    })
}

exports.updateProfilePicture = (req,res) => {
    if(!req.file){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    const {userId} = req.params
    imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: req.file.originalname,
        folder: 'user_profile_picture'
    }, (err, response) => {
        if(err){
            console.log('error while uploading profile picture: ', err)
            return res.status(500).json({
                status: "failed",
                message: "An error occured during file upload. Please try again."
              })
        }else{
            User.updateProfilePicture(userId,response.url, (err,data) => {
                if(err){
                    console.log('error while changing profile picture in database: ', err)
                    res.status(500).send({
                        message: err.message || "some error occured while creating new hotelimage"
                    })
                }

                res.send({profilePicture: response.url})
            })
        }
    })
}

// Update a User identified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    
      User.updateById(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username
        },
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating User with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}`
                })
            }else{
                res.status(500).send({
                    message: `Couldn't delete user with id ${req.params.id}`
                })
            }
        }else
            res.send({message: `User was deleted successfully!`})
    })
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while deleting all users"
            })
        }else
            res.send({message: 'All users successfully removed!!!'})
    })
};

exports.getTotalUser = (req,res) => {
    User.getTotalUser((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving total users"
            })
        else
            res.send(data)
    })
}