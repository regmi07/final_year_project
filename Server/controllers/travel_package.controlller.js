const TravelPackage = require("../models/travel_package_model.js")

exports.create = (req, res) => {
    if(!req.body)
        res.status(400).send({
            message: "Content cannot be empty"
        })

    const newTravelPackage = new TravelPackage({
        title: req.body.title,
        from_destination: req.body.from_destination,
        to_destination: req.body.to_destination,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        priceperperson: req.body.priceperperson,
        max_traveler: req.body.max_traveler,
        travel_agency: req.body.travel_agency
    })

    TravelPackage.create(newTravelPackage, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new Travel Package"
            })
        else
            res.send(data)
    })
    
}

exports.findById = (req,res) => {
    const {id} = req.params
    TravelPackage.findById(id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving travel package by id"
            })
        else{
            res.send(data)
        }
    })
}

exports.findByTravelAgency = (req,res) => {
    const {travel_agency_id} = req.params
    TravelPackage.findByTravelAgency(travel_agency_id, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving travel package by travel agency"
            })
        else
            res.send(data)
    })
}

exports.findAvailablePackage = (req,res) => {
    const {start_date, end_date, total_traveler,from_dest,to_dest,travel_agency} = req.query
    TravelPackage.findAvailablePackage(start_date, end_date, total_traveler,from_dest,to_dest,travel_agency, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving available travel package"
            })
        else
            res.send(data)
    })
}