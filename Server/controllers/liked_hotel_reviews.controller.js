const LikedHotelReview = require('../models/liked_hotel_reviews.model.js')

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })  
    }

    const newLikedHotelReview = new LikedHotelReview({
        liked_by: req.userId,
        review_for: req.body.review_for,
        review_by: req.body.review_by
    })

    LikedHotelReview.create(newLikedHotelReview, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new liked hotel review"
            })
        else
            res.send(data)
    })
}

exports.delete = (req,res) => {
    const {liked_by,review_for,review_by} = req.params

    LikedHotelReview.remove(liked_by, review_for, review_by, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting instructed liked hotel review"
            })
        else
            res.send(data)
    })
}