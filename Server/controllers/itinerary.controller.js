const Itinerary = require('../models/itinerary.model.js');

exports.create = (req,res) => {
    if(!req.body)
        res.status(400).send({
            message: "Content cannot be empty"
        })

    const newItinerary = new Itinerary({
        title: req.body.title,
        day: req.body.day,
        duration: req.body.duration,
        description: req.body.description,
        travel_package: req.body.travel_package
    })

    Itinerary.create(newItinerary, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new Itinerary"
            })
        else
            res.send(data)
    })
}

exports.findByTravelPackage = (req,res) => {
    const {package_id} = req.params
    Itinerary.findByTravelPackage(package_id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving itinerary by travel package"
            })
        else{
            res.send(data)
        }
    })
}

exports.update = (req,res) => {
    const {id} = req.params
    const updateItinerary = new Itinerary({
        title: req.body.title,
        day: req.body.day,
        duration: req.body.duration,
        description: req.body.description,
        travel_package: req.body.travel_package
    })
    Itinerary.updateById(id, updateItinerary, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while updating Itinerary"
            })
        else
            res.send(data)
    })
}

exports.removeById = (req,res) => {
    Itinerary.removeById(req.params.id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while removing itinerary by id"
            })
        else{
            res.send(data)
        }
    })
}