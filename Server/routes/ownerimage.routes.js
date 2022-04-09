module.exports = (app) => {
    const ownerimages = require("../controllers/ownerimage.controller")
    const {upload} = require("../middleware")
    const {auth} = require("../middleware")

    var router = require("express").Router();
  
    // Create a new Destination
    router.post("/",upload.array('file'), ownerimages.create);

    app.use('/uploadhotelimage', router);
}