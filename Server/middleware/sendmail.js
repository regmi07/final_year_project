const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const mailConfig = require('../config/mail.config')
const config = require('../config/config')

let sender = 'travelassist.mail@gmail.com'

const getUrl = (id) => {
    let date = new Date()
    let mail = {
        'id': id,
        'created': date.toString()
    }

    const token_mail_verification = jwt.sign(mail, mailConfig.secret, { expiresIn: '1d'})
    return `http://localhost:3000/verify/${token_mail_verification}`
}

const sendRegisterMail = (email,url) => {
    sendMail({
        from: sender,
        to: email,
        subject: 'Email Confirmation',
        html: `<h3>Email Confirmation - Travel Assist</h3><br/><p style="">Please click <a href=${url}>here</a> to verify your email<br/><br/>Thanks for using Travel Assist</p>`
        }    
    )  
}

const sendBookingConfirmationEmail = (email, bookingInfo) => {
    sendMail({
        from: sender,
        to: email,
        subject: 'Booking Successful',
        html: `
                <h3>Booking Successful</h3>
                <p>
                    Hello ${bookingInfo.name},<br>
                    You have successfully booked ${bookingInfo.rooms} rooms at ${bookingInfo.hotel}<br>
                    Check In Date: ${bookingInfo.checkIn}<br>
                    check out Date: ${bookingInfo.checkOut}
                </p>
                <p>Thank you for using Travel Assist</p>
            `
    })
}

const sendTravelPackageBookingConfirmationEmail = (email, bookingInfo) => {
    sendMail({
        from: sender,
        to: email,
        subject: 'Booking Successful',
        html: `
                <h3>Booking Successful</h3>
                <p>
                    Hello ${bookingInfo.name},<br>
                    You have successfully booked ${bookingInfo.title} for ${bookingInfo.total_traveler} traveller<br>
                    Departure: ${bookingInfo.departure}<br>
                    Return: ${bookingInfo.return}
                </p>
                <p>Thank you for using Travel Assist</p>
            `
    })
}

const sendMail = (mailOptions) => {
    var Transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'travelassist.mail@gmail.com',
            pass: 'travelassist1'
        },
    })

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
    sendRegisterMail: sendRegisterMail,
    sendBookingConfirmationEmail: sendBookingConfirmationEmail,
    sendTravelPackageBookingConfirmationEmail: sendTravelPackageBookingConfirmationEmail
}

module.exports = mail