module.exports = app => {
    const reviews = require("../controllers/reviews.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    //create a new review
    router.post("/",[auth.verifyToken],reviews.create)

    router.get("/hotel/:hotelId", reviews.getReviewByOwner)
    router.get("/user/:user", reviews.getReviewByUser)

    router.put("/:id", [auth.verifyToken], reviews.updateReview)

    router.delete("/:id", [auth.verifyToken], reviews.delete)

    app.use('/reviews', router)
}