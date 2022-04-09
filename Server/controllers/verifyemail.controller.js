const config = require('../config/mail.config')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

exports.verifyemail = (req,res) => {
    token = req.query.id;
    if (token) {
        try {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    console.log(err)
                    return res.status(403).send({
                        message: err.message || 'token verification error'
                    })
                } else {
                    id = decoded.id;
                    User.updateBy(id, 'isVerified', 1, (err,data) => {
                        if(err){
                            res.status(400).send({
                                message: 'cannot verify'
                            })
                        }else
                            res.send(data)
                    })
                }

            });
        } catch (err) {

            console.log(err)
            return res.sendStatus(403)
        }
    } else {
        return res.sendStatus(403)

    }

}