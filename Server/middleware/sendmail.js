const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const mailConfig = require('../config/mail.config')
const config = require('../config/config')

const getUrl = (id) => {
    let date = new Date()
    let mail = {
        'id': id,
        'created': date.toString()
    }

    const token_mail_verification = jwt.sign(mail, mailConfig.secret, { expiresIn: '1d'})
    return `http://localhost:3000/verify/${token_mail_verification}`
}

const sendMail = (email, url) => {
    var Transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'travelassist.mail@gmail.com',
            pass: 'travelassist1'
        },
    })

    var mailOptions
    let sender = 'travelassist.mail@gmail.com'
    mailOptions = {
        from: sender,
        to: email,
        subject: 'Email Confirmation',
        html: `<h3>Email Confirmation - Travel Assist</h3><br/><p style="">Please click <a href=${url}>here</a> to verify your email<br/><br/>Thanks for using Travel Assist</p>`
    }

    Transport.sendMail(mailOptions, (err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log("Message sent")
        }
    })
}

const mail = {
    getUrl: getUrl,
    sendMail: sendMail
}

module.exports = mail