module.exports = app => {
    const likedHotelReview = require("../controllers/liked_hotel_reviews.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/",[auth.verifyToken], likedHotelReview.create)

    router.delete('/:liked_by/:review_for/:review_by', [auth.verifyToken], likedHotelReview.delete)

    app.use('/likedreviews', router)
}