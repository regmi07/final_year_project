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

module.exports = Room