const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const User = require("../models/user.model")

verifyToken = (req,res,next) => {
    console.log('auth middleware called')
    console.log(req.headers)
    let token = req.headers["x-access-token"]
    console.log(token)

    if(!token){
        return res.status(403).send({
            message: "No token provided"
        })
    }

    jwt.verify(token, config.secret, (err,decoded) => {
        if(err){
            console.log('unauthorized')
            return res.status(401).send({
                message: "unauthorized to access the content"
            })
        }
        // console.log('signin: ',decoded.id)
        req['userId'] = decoded.id
        // console.log(req.userId)
        // console.log(req)
        next()
    })
}

isAdmin = (req,res,next) => {
    console.log('isAdmin called')
    User.findById(req.userId, (err,data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with id ${req.userid}`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving User with id " + req.userid
                })
            }
        }

        if(data.role === "Admin"){
            console.log('role', data.role)
            next()
            return
        }
        res.status(403).send({
            message: "Require Admin Role!"
          });
          return;
    })
}

isOwner = (req,res,next) => {
    User.findById(req.userId, (err,data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with id ${req.userid}`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving User with id " + req.userid
                })
            }
        }

        if(data.role === "Owner"){
            console.log('role', data.role)
            next()
            return
        }
        res.status(403).send({
            message: "Require User Role!"
          });
          return;
    })
}

isEmailVerified = (req,res,next) => {
    User.findBy(req.body,'username', (err,data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found User with username ${req.username}`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving User with username " + req.body.username
                })
            }
        }else{
            if(!data.isVerified){
                res.status(401).send({
                    message: "Email is not verified! please verify email"
                })
            }else
                next()
        }
    })
}

const auth = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isOwner: isOwner,
    isEmailVerified: isEmailVerified
}

module.exports = auth