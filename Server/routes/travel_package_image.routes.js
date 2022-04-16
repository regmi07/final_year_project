module.exports = (app) => {
    const travel_package_images = require("../controllers/travel_package_image.controller")
    const {auth, upload} = require("../middleware")

    var router = require("express").Router()

    router.post("/", upload.array('file'), travel_package_images.create)

    router.delete('/delete/:travel_package_image_id', [auth.verifyToken, auth.isOwner], travel_package_images.remove)

    app.use('/travelpackageimage', router)
}