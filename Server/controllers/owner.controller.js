const Owner = require("../models/owner.model.js");

// Create and Save a new Owner
exports.create = (req, res) => {
    //Validate request
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    //create a Owner
    const newOwner = new Owner({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        category: Array.isArray(req.body.category) ? req.body.category.toString() : req.body.category,
        destinationid: req.body.destinationid,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    })

    //save Owner in database
    Owner.create(newOwner, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new Owner"
            })
        else
            res.send(data)
    })
};

// Retrieve all Owners from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name
    console.log(name)
    Owner.getAll(name, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving owners"
            })
        else
            res.send(data)
    })
};

// Find a single Owner with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Owner.findById(id, (err,data) => {
      if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving owner by id"
        })
    else
        res.send(data)
  })
};

//find all the hotels available for booking on selected destinations
exports.getHotelsAvailableForBookingByDestination = (req, res) => {
    Owner.getHotelsAvailableForBookingByDestination(req.query, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving owner by destination id"
            })
        else
            res.send(data)
        console.log(data)
    })
}

exports.getByDestination = (req, res) => {
    const id = req.params.destid
    Owner.getByDestination(id, (err,data) => {
        if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving owner by destination id"
        })
    else
        res.send(data)
    })
}

// Update a owner identified by the id in the request
exports.update = (req, res) => {
  const id = req.params.id
  console.log(id)

  if(!req.body){
    res.status(400).send({
        message: "Content cannot be empty"
    })
  } 
  
  const updatedOwner = new Owner({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    category: Array.isArray(req.body.category) ? req.body.category.toString() : req.body.category,
    destinationid: req.body.destinationid,
    longitude: req.body.longitude,
    latitude: req.body.latitude
  })

  Owner.updateById(id, updatedOwner, (err,data) => {
    if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving owner by id"
        })
    else
        res.send(data)
  })
};

// Delete a Owner with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Owner.remove(id, (err,data) => {
    if(err)
        res.status(500).send({
            message: err.message || "Some error occured while deleting owner by id"
        })
    else
        res.send(data)
  })
};

exports.getUnverifiedOwners = (req,res) => {
    Owner.getUnVerifiedOwner((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting owner by id"
            })
        else
            res.send(data)
    })
}

exports.verifyOwner = (req,res) => {
    const {hotelId} = req.params
    console.log('hotel: ', hotelId)
    Owner.verifyOwner(hotelId, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting owner by id"
            })
        else
            res.send(data)
    })
}

// Delete all Owners from the database.
exports.deleteAll = (req, res) => {
  
};

//get distinct categories
exports.findDistinctCategory = (req,res) => {
    console.log('get category called')
    Owner.getAllCategories((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving distinct categories"
            })
        else
            res.send(data)  
    })
};

exports.getTotalOwner = (req,res) => {
    console.log('get tot owner called')
    Owner.getTotalOwner((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving total owners"
            })
        else
            res.send(data)  
    })
}

exports.getAllOwnerName = (req,res) => {
    console.log('get owner names called')
    Owner.getAllOwnerName((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving destination names"
            })
        else
            res.send(data)  
    })
}