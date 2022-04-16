const TravelPackageBooking = require("../models/travel_package.booking.model.js")

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newTravelPackageBooking = new TravelPackageBooking({
        total_traveler: req.body.total_traveler,
        user_id: req.body.user_id,
        travel_package: req.body.travel_package,
        payment_id: req.body.payment_id
    })

    TravelPackageBooking.create(newTravelPackageBooking, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new Travel package booking"
            })
        else
            res.send(data)
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