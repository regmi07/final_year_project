const ThingsToDo = require("../models/things_to_do.model.js");

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newThingsToDo = new ThingsToDo({
        name: req.body.name,
        description: req.body.location,
        destination_id: req.body.destination_id
    })

    ThingsToDo.create(newThingsToDo, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new things to do"
            })
        else
            res.send(data)
    })
}

exports.findAll = (req,res) => {
    const name = req.query.name
    console.log(name)
    ThingsToDo.getAll(name, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving things to do"
            })
        else
            res.send(data)
    })
}

exports.findOne = (req,res) => {
    const id = req.params.id
    ThingsToDo.findById(id, (err,data) => {
      if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving things to do by id"
        })
    else
        res.send(data)
  })
}

exports.findByDestination = (req,res) => {
    const id = req.params.destination_id
    console.log(id, '----------------------------------------------')
    ThingsToDo.findByDestination(id, (err,data) => {
      if(err)
        res.status(500).send({
            message: err.message || "Some error occured while retrieving things to do by destination id"
        })
    else
        res.send(data)
  })
}

exports.update = (req, res) => {
    const id = req.params.id
  
    if(!req.body){
      res.status(400).send({
          message: "Content cannot be empty"
      })
    } 
    
    const updatedThingsToDo = new ThingsToDo({
        name: req.body.name,
        description: req.body.location,
        destination_id: req.body.destination_id
    })
  
    ThingsToDo.updateById(id, updatedThingsToDo, (err,data) => {
      if(err)
          res.status(500).send({
              message: err.message || "Some error occured while retrieving things to do by id"
          })
      else
          res.send(data)
    })
  };

  exports.delete = (req, res) => {
    const id = req.params.id
  
    ThingsToDo.remove(id, (err,data) => {
      if(err)
          res.status(500).send({
              message: err.message || "Some error occured while deleting things to do by id"
          })
      else
          res.send(data)
    })
  };