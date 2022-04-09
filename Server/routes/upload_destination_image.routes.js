module.exports = (app) => {
    const destinationimages = require("../controllers/destinationimage.controller")
    const {upload} = require("../middleware")
    const {auth} = require("../middleware")

    var router = require("express").Router();
  
    // Create a new Destination
    router.post("/",upload.array('file'), destinationimages.create);

    app.use('/uploaddestimage', router);
}