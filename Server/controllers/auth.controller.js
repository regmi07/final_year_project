const bcrypt = require('bcryptjs')
// const { config } = require('dotenv')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model.js')
const config = require('../config/auth.config')
// const {mail} = require('../middleware')
const { getUrl, sendMail } = require('../middleware/sendmail.js')

exports.register = async(req,res) => {

    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hasPassword = await bcrypt.hash(req.body.password, salt)

    //create new admin
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hasPassword,
        role: req.body.role
    })

    User.create(newUser, (err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || "some error occured while creating new admin"
            })
        }else{
            const url = getUrl(data.id)
            sendMail(data.email, url)
            res.send(data)
        }
    })

}

exports.signin = (req,res) => {
    console.log(req.body.role)
    User.findBy(req.body,'username', async(err,data) => {
        if(err?.kind){
            res.status(400).send({
                type: 'Invalid Username',
                message: "username is invalid"
            })
        }else if(err){
            res.status(500).send({
                message: err.message || "Some error occured while signing in"
            })
        }else if(req.body.role.toLowerCase() !== data.role.toLowerCase()){
            res.status(400).send({
                type: `Invalid role`,
                message: `${req.body.username} doesn't have ${req.body.role} access`
            })
        }else{
            const validPass = await bcrypt.compare(req.body.password, data.password)
            if(!validPass){
                res.status(400).send({
                    message: 'password is invalid'
                })
            }
            // }else if(req.body.role.toLowerCase() !== data.role.toLowerCase()){
            //     res.status(400).send({
            //         type: `Invalid role`,
            //         message: `${req.body.username} doesn't have ${req.body.role} access`
            //     })
            // }
            else{
                const accessToken = jwt.sign({id: data.id, username: data.username}, config.secret, {expiresIn: '1d'})
                res.status(200).send({
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    role: data.role,
                    accessToken: accessToken,
                    profilePicture: data.profilepicture
                })
            }
        }
    })
}

exports.googleSignIn = (req, res) => {
    if(!req.user){
        return res.status(400).send('Authentication failed!');
    }

    const {email} = req.user
    console.log(email)
    return res.status(200).send({email})
    
}