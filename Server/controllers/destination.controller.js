const Destination = require("../models/destination.model.js");

// Create and Save a new Destination
exports.create = (req, res) => {
    //Validate request
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    //create a Destination
    const newDestination = new Destination({
        name: req.body.name,
        location: req.body.location,
        averagerating: req.body.averagerating,
        description: req.body.description,
        category: Array.isArray(req.body.category) ? req.body.category.toString() : req.body.category,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    })

    //save Destination in database
    Destination.create(newDestination, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new destination"
            })
        else
            res.send(data)
    })
};

// Retrieve all Destinations from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name
    console.log(name)
    Destination.getAll(name, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving destinations"
            })
        else
            res.send(data)
    })
};

// Find a single Destination with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Destination.findById(id, (err,data) => {
      if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving destination by id"
        })
    else
        res.send(data)
  })
};

// Update a Destination identified by the id in the request
exports.update = (req, res) => {
  const id = req.params.id

  if(!req.body){
    res.status(400).send({
        message: "Content cannot be empty"
    })
  } 
  
  const updatedDestination = new Destination({
    name: req.body.name,
    location: req.body.location,
    averagerating: req.body.averagerating,
    description: req.body.description,
    category: Array.isArray(req.body.category) ? req.body.category.toString() : req.body.category,
    longitude: req.body.longitude,
    latitude: req.body.latitude
  })

  Destination.updateById(id, updatedDestination, (err,data) => {
    if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving destination by id"
        })
    else
        res.send(data)
  })
};

// Delete a Destination with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Destination.remove(id, (err,data) => {
    if(err)
        res.status(500).send({
            message: err.message || "Some error occured while deleting destination by id"
        })
    else
        res.send(data)
  })
};

// Delete all Destinations from the database.
exports.deleteAll = (req, res) => {
  
};

//get distinct categories
exports.findDistinctCategory = (req,res) => {
    console.log('get category called')
    Destination.getAllCategories((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving distinct categories"
            })
        else
            res.send(data)  
    })
};

exports.getTotalDestination = (req,res) => {
    console.log('get tot destination called')
    Destination.getTotalDestination((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving total destinations"
            })
        else
            res.send(data)  
    })
}

exports.getAllDestinationName = (req,res) => {
    console.log('get destination names called')
    Destination.getAllDestinationName((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured white retrieving destination names"
            })
        else
            res.send(data)  
    })
}