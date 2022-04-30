module.exports = app => {
    const reviews = require("../controllers/reviews.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    //create a new review
    router.post("/",[auth.verifyToken],reviews.create)

    router.get("/hotel/:hotelId", reviews.getReviewByOwner)
    router.get("/user/:user", reviews.getReviewByUser)
    router.get("/", [auth.verifyToken, auth.isAdmin], reviews.getAllReview)

    router.put("/:id", [auth.verifyToken], reviews.updateReview)

    router.delete("/:hotel", [auth.verifyToken], reviews.delete)
    router.delete("/admin/:user/:hotel", [auth.verifyToken, auth.isAdmin], reviews.delete)

    app.use('/reviews', router)
}