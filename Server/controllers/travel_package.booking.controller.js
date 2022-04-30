const TravelPackageBooking = require("../models/travel_package.booking.model.js")
const Payment = require('../models/payment.model.js');
const { sendTravelPackageBookingConfirmationEmail } = require('../middleware/sendmail.js')

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    const newPayment = new Payment({
        paymenttype: req.body.payment_type,
        paidamount: req.body.paid_amount,
        total_amount: req.body.total_amount
    })

    Payment.create(newPayment, (err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || "some error occured while creating new payment for booking"
            })
            return
        }

        const newTravelPackageBooking = new TravelPackageBooking({
            total_traveler: req.body.total_traveler,
            user_id: req.body.user_id,
            travel_package_by_id: req.body.travel_package_id,
            payment_id: data.id
        })

        TravelPackageBooking.create(newTravelPackageBooking, (err,data) => {
            if(err)
                res.status(500).send({
                    message: err.message || "some error occured while creating new Travel package booking"
                })
            else
                sendTravelPackageBookingConfirmationEmail(req.body.email, {
                    name: req.body.name,
                    title: req.body.travel_package,
                    travel_agency: req.body.travel_agency,
                    total_traveler: req.body.total_traveler,
                    departure: req.body.start_date,
                    return: req.body.end_date
                })
                res.send(data)
        })
    })
}

exports.findById = (req,res) => {
    const {id} = req.params
    TravelPackageBooking.findById(id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving travel package booking by id"
            })
        else
            res.send(data)
    })
}

exports.findByUser = (req,res) => {
    const {user_id} = req.params
    TravelPackageBooking.findByUser(user_id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving travel package booking by user"
            })
        else
            res.send(data)
    })
}