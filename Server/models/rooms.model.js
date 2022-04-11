const sql = require('./database')

const Room = function(room){
    this.roomnumber = room.roomnumber,
    this.roomtype = room.roomtype,
    this.roomname = room.roomname,
    this.price = room.price,
    this.hotel = room.hotel
}

Room.create = (newRoom, result) => {
    sql.query(`INSERT INTO rooms SET ?`, newRoom, (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log('room created: ', {id: res.insertId, ...newRoom})
        result(null, {id: res.insertId, ...newRoom})
    })
}

Room.findById = (id, result) => {
    sql.query(`SELECT * FROM rooms WHERE id = ${id}`, (err,res) => {
        if(err){
            console.log('err')
            result(err,null)
            return
        }

        if(res.length) {
            console.log('fond rooms: ', res[0])
            result(null,{...res[0]})
            return
        }
        result({kind: "not_found"}, null)
    })
}

Room.findByHotel = (hotel, result) => {
    sql.query(`SELECT * FROM rooms WHERE hotel = ${hotel}`, (err,res) => {
        if(err){
            console.log('err')
            result(err,null)
            return
        }

        if(res.length){
            console.log('found rooms of given hotel: ', res)
            result(null,[...res])
            return
        }

        result({kind: 'not_found'}, null)
    })
}

Room.finByRoomType = (roomtype, result) => {
    sql.query(`SELECT * FROM rooms WHERE roomtype = ${roomtype}`, (err,res) => {
        if(err){
            console.log('err')
            result(err,null)
            return
        }

        if(res.length) {
            console.log('found room of given roomtype')
            result(null,[...res])
            return
        }

        result({kind: "not_found"}, null)
    })
}

Room.getAvailableRoomByHotel = (check_in_date, check_out_date, rooms, hotelId, result) => {
    sql.query(`
    SELECT
    *
    FROM
        rooms r
    LEFT JOIN booked_room br ON
        r.roomid = br.room_id
    LEFT JOIN booking b ON
        br.booking_id = b.booking_id
    WHERE
        (
            br.room_id IS NULL OR(
                b.check_out_date < '${check_in_date}' OR b.check_in_date > '${check_out_date}'
            )
        ) AND hotel = ${hotelId};
    `, (err,res) => {
        if(err){
            console.log('error occured while getting available room by hotel')
            result(err,null)
            return
        }

        if(res.length >= rooms) {
            console.log('found available room for booking by hotel')
            console.log(res)
            result(null,res)
            return
        }
        
        result({kind: "not_found"}, null)
    })
}

module.exports = Room