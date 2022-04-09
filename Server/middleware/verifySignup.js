const User = require('../models/user.model')

checkDuplicateUsernameOrEmail = (req,res,next) => {
    //check for duplicate username
    User.findBy(req.body,'username',(err,data) => {
        if(data){
            console.log(data)
            res.status(404).send({
                message: `found User with username ${req.body.username}`
            }) 
            return
        }

        //check for duplicate email
        User.findBy(req.body,'email',(err,data) => {
            if(data){
                res.status(404).send({
                    message: `found User with email = ${req.body.email}`
                }) 
                return
            }
    
            next()
        })
    })
}

checkRoleExists = (req,res,next) => {
    const roles = ['admin','user','owner']
    // User.findBy(req.body,'role',(err,data) => {
    //     if(err){
    //         res.status(404).send({
    //             message: `role ${req.body.role} doesn't exists`
    //         }) 
    //         return
    //     }
    // })
    if(!roles.includes(req.body.role.toLowerCase())){
        res.status(404).send({
            message: `role ${req.body.role} doesn't exists`
        })
        return
    }

    next()
}

const verifySignup = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRoleExists: checkRoleExists
}

module.exports = verifySignup