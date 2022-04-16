const TravelAgency = require("../models/travel_agency.model.js")

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newTravelAgency = new TravelAgency({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        description: req.body.description,
        phone: req.body.phone
    })

    TravelAgency.create(newTravelAgency, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new Travel Agency"
            })
        else
            res.send(data)
    })
}

exports.findById = (req,res) => {
    const {id} = req.params
    TravelAgency.findById(id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving travel agency by id"
            })
        else
            res.send(data)
        })
}

exports.updateUser = (req,res) => {
    const {id} = req.params

    if(!req.body.user){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }
    
    TravelAgency.updateUser(id, req.body.user, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while updating travel agency's user"
            })
        else
            res.send(data)
    })
}

exports.updateAll = (req,res) => {
    const {id} = req.params

    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const updatedTravelAgency = new TravelAgency({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        description: req.body.description,
        phone: req.body.phone
    })

    TravelAgency.updateAll(id,updatedTravelAgency,(err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while updating travel_agency by id"
            })
        else
            res.send(data)
    })
}