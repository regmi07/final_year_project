const Review = require("../models/reviews.model.js")

//create and save a new review
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })  
    }

    const newReview = new Review({
        user: req.userId,
        owner: req.body.owner,
        rating: req.body.rating,
        review_title: req.body.review_title,
        review: req.body.review,
        date_of_stay: req.body.date_of_stay
    })

    //save review in database
    Review.create(newReview, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new review"
            })
        else
            res.send(data)
    })
}

exports.getAllReview = (req,res) => {
    Review.findAll((err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving reviews"
            })
        else
            res.send(data)
    })
}

    //Retrieve all reviews of particular owner
exports.getReviewByOwner = (req, res) => {
    const owner = req.params.hotelId
    Review.findByOwner(owner, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving reviews by owners"
            })
        else
            res.send(data)
    })
}

exports.getReviewByUser = (req, res) => {
    const user = req.params.user
    Review.findByUser(user, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while retrieving reviews by user"
            })
        else
            res.send(data)
    })
}

exports.updateReview = (req, res) => {
    const {user, hotel} = req.params

    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }
    
    Review.updateById(user, hotel, req.body.review, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while retrieving owner by id"
            })
        }else
            res.send(data)
    })
}

exports.delete = (req, res) => {
    const {hotel,user} = req.params
    const toberemoved = user ? user: req.userId

    Review.remove(toberemoved, hotel, (err, data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting review by id"
            })
        else
            res.send(data)
    })
}