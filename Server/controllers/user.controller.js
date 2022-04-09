const User = require("../models/user.model.js");

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

// Update a User identified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      User.updateById(
        req.params.id,
        new User(req.body),
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