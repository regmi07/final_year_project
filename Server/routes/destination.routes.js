module.exports = app => {
    const destinations = require("../controllers/destination.controller.js");
    const {auth, geocoding} = require("../middleware")
  
    var router = require("express").Router();
  
    // Create a new Destination
    router.post("/", [auth.verifyToken, auth.isAdmin, geocoding.forwardGeocoding], destinations.create);

    // get all distinct categories
    router.get("/category", destinations.findDistinctCategory);

    //get totaldestinations
    router.get('/totaldest', destinations.getTotalDestination);

    router.get("/name", destinations.getAllDestinationName)
  
    // Retrieve all Destination
    router.get("/", destinations.findAll);


    // Retrieve a single Destination with id
    router.get("/:id", destinations.findOne);
    
    // Update a Destination with id
    router.put("/:id", [auth.verifyToken, auth.isAdmin, geocoding.forwardGeocoding], destinations.update);
  
    // Delete a Destination with id
    router.delete("/:id", [auth.verifyToken, auth.isAdmin], destinations.delete);
  
    // Delete all Destinations
    router.delete("/", [auth.verifyToken, auth.isAdmin], destinations.deleteAll);
  
    app.use('/destinations', router);
  };