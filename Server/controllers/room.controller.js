const Room = require("../models/rooms.model.js")

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newRoom = new Room({
        roomnumber: req.body.room_number,
        roomtype: req.body.room_type,
        roomname: req.body.room_name,
        price: req.body.price,
        hotel: req.body.hotel
    })

    Room.create(newRoom, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new room"
            })
        else
            res.send(data)
    }) 
}

exports.findRoomByHotel = (req, res) => {
    console.log(req.query)
    const {checkindate, checkoutdate, rooms, hotelId} = req.query
    Room.getAvailableRoomByHotel(checkindate, checkoutdate, rooms, hotelId, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while available retrieving rooms by hotel"
            })
        else
            res.send(data)
    })
}