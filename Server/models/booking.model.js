const sql = require("./database.js");

const Booking = function(booking) {
    this.total_traveler = booking.total_traveler
    this.user_id = booking.user_id
    this.payment_id = booking.payment_id
    this.check_in_date = booking.check_in_date
    this.check_out_date = booking.check_out_date
}

Booking.create = (newBooking, room_id, result) => {
    console.log('booking model called')
    sql.query(`INSERT INTO booking SET ?`, newBooking, (err,res) => {
        if(err){
            console.log('error while adding booking: ',err)
            result(err,null)
            return
        }
        room_id.map((id) => {
            sql.query(`INSERT INTO booked_room SET room_id = ${id}, booking_id = ${res.insertId}`, (error,response) => {
                if(error){
                    console.log('error while adding booked_room: ',error)
                    result(error,null)
                    return
                }
            })
        })
        
        console.log('created booking: ', {booking_id: res.insertId, ...newBooking, room_id})
        result(null, {booking_id: res.insertId, ...newBooking, room_id})
    })
}

Booking.findByUser = (userId, result) => {
    sql.query(`SELECT * FROM booking where user_id = ${userId}`, (err,res) => {
        if(err){
            console.log('error while getting booking by user_id')
            result(err,null)
            return
        }

        if(res.length){
            console.log('found booking by userId')
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

module.exports = Booking