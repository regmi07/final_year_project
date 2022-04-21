module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const {auth, upload} = require("../middleware")
  
    var router = require("express").Router();
  
    // Create a new Destination
    router.post("/", users.create);
    router.post("/password/", [auth.verifyToken], users.updatePassword)
  
    // Retrieve all Destination
    router.get("/", users.findAll);

    //get totaldestinations
    router.get('/totaluser', users.getTotalUser);
  
    // Retrieve a single Destination with id
    router.get("/:id", users.findOne);
  
    // Update a Destination with id
    router.put("/updateprofilepicture/:userId", upload.single('file'), users.updateProfilePicture)
    router.put("/:id", users.update);
  
    // Delete a Destination with id
    router.delete("/:id", [auth.verifyToken, auth.isAdmin], users.delete);
  
    // Delete all Destinations
    router.delete("/", [auth.verifyToken, auth.isAdmin], users.deleteAll);
  
    app.use('/users', router);
  };