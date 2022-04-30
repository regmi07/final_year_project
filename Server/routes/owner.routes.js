module.exports = app => {
    const owners = require("../controllers/owner.controller.js");
    const {auth, geocoding} = require("../middleware")
  
    var router = require("express").Router();
  
    // Create a new Owner
    router.post("/", geocoding.forwardGeocoding, owners.create);

    // get all distinct categories
    router.get("/category", owners.findDistinctCategory);

    //get totalowners
    router.get('/totaldest', owners.getTotalOwner);

    router.get("/name", owners.getAllOwnerName)

    router.get("/availablehotels", owners.getHotelsAvailableForBookingByDestination)

    router.get("/bydest/:destid", owners.getByDestination)
    router.get("/unverifiedhotels", [auth.verifyToken, auth.isAdmin], owners.getUnverifiedOwners)

    // Retrieve all Owner
    router.get("/", owners.findAll);


    // Retrieve a single Owner with id
    router.get("/:id", owners.findOne);
    
    // Update a Owner with id
    router.put("/:id", [auth.verifyToken, auth.isAdmin, geocoding.forwardGeocoding], owners.update);
    router.put("/verifyowner/:hotelId", owners.verifyOwner)
  
    // Delete a Owner with id
    router.delete("/:id", [auth.verifyToken, auth.isAdmin], owners.delete);
  
    // Delete all owners
    router.delete("/", [auth.verifyToken, auth.isAdmin], owners.deleteAll);
  
    app.use('/owners', router);
  };