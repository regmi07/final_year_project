const Booking = require('../models/booking.model.js');
const { sendBookingConfirmationEmail } = require('../middleware/sendmail.js')

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newBooking = new Booking({
        total_traveler: req.body.total_traveler,
        user_id: req.body.user_id,
        payment_id: req.body.payment_id,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date
    })

    Booking.create(newBooking, req.body.room_id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while booking"
            })
        else
            sendBookingConfirmationEmail(req.body.email, {
                name: req.body.name,
                hotel: req.body.hotel,
                rooms: req.body.room_id?.length,
                checkIn: req.body.check_in_date,
                checkOut: req.body.check_out_date
            })
            res.send(data)
    })
}

exports.findByUser =(req,res) => {
    const {userId} = req.params
    Booking.findByUser(userId, (err,data) => {
        if(err)
        res.status(500).send({
            message: err.message || "Some error occured while geeting bookings by user"
        })
    else
        res.send(data)
    })
}