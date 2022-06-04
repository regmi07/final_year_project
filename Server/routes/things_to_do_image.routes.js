module.exports = (app) => {
    const thingsToDoImages = require("../controllers/things_to_do_image.controller")
    const {upload} = require("../middleware")
    const {auth} = require("../middleware")

    var router = require("express").Router();
  
    // Create a new Destination
    router.post("/",upload.array('file'), thingsToDoImages.create);

    app.use('/uploadthingstodoimage', router);
}