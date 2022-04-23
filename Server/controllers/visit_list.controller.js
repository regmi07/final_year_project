const VisitList = require("../models/visit_list.model.js");

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newVisitList = new VisitList({
        user: req.userId,
        destination: req.body.destination,
        type: req.body.type,
        visit_summary: req.body.visit_summary,
        experience: req.body.experience, 
        things_did: req.body.things_did,
        stay: req.body.stay,
        transportation: req.body.transportation,
        sites: req.body.sites
    })

    VisitList.findById(req.userId, req.body.destination, (err, data) => {
        console.log(data, ' data')
        if(err?.kind === "not_found"){
            VisitList.create(newVisitList, (err,data) => {
                if(err)
                    res.status(500).send({
                        message: err.message || "some error occured while creating new visit list"
                    })
                else
                    res.send(data)
            })
        }else if(data){
            VisitList.updateVisitedList(newVisitList, (err,data) => {
                if(err){
                    res.status(500).send({
                        message: err.message || "some error occured while updating existing visit list"
                    })
                }else
                    res.send(data)
            })

        }else{
            res.status(500).send({
                message: err.message || "some error occured while getting visit list by id"
            })
        }
    })
}

exports.findPlanToVisitListByUser = (req,res) => {
    const {user} = req.params
    VisitList.findPlanToVisitListByUser(user, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving plan to visit list by user"
            })
        else
            res.send(data)
    })
}

exports.findVisitedListByUser = (req,res) => {
    const {user} = req.params
    VisitList.findVisitedListByUser(user,(err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving visited list by user"
            })
        else
            res.send(data)
    })
}

exports.findVisitedListByDestiation = (req,res) => {
    const {destination} = req.params
    VisitList.findVisitedListByDestination(destination,(err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving visited list by destination"
            })
        else
            res.send(data)
    })
}

exports.findVisitedListById = (req,res) => {
    const {user,destination} = req.query
    VisitList.findVisitedListById(user,destination,(err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving visit list by id"
            })
        else
            res.send(data)
    })
}

exports.deleteVisitedListById = (req,res) => {
    const {destination} = req.params

    VisitList.deleteVisitedListById(req.userId,destination,(err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting visit list by id"
            })
        else
            res.send(data)
    })
}