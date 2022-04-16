const sql = require("./database.js")

const TravelPackageBooking = function(travelPackageBooking){
    this.total_traveler = travelPackageBooking.total_traveler
    this.user_id = travelPackageBooking.user_id
    this.travel_package = travelPackageBooking.travel_package
    this.payment_id = travelPackageBooking.payment_id
}

TravelPackageBooking.create = (newTravelPackageBooking, result) => {
    sql.query(`INSERT INTO travel_package_booking SET ?`, newTravelPackageBooking, (err,res) => {
        if(err){
            console.log("error occured while creating travel package booking")
            result(err,null)
            return
        }

        console.log("created travel package booking", {id: res.insertId, ...newTravelPackageBooking})
        result(null, {id: res.insertId, ...newTravelPackageBooking})
    })
}

TravelPackageBooking.findById = (id,result) => {
    sql.query(
        `SELECT * FROM travel_package_booking WHERE booking_id=${id}`
        ,(err,res) => {
            if(err){
                console.log("error while getting travel package booking by id")
                result(err,null)
                return
            }

            if(res.length) {
                console.log("found travel package booking: ", res)
                result(null,res)
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

TravelPackageBooking.findByUser = (user_id, result) => {
    sql.query(
        `SELECT b.booking_id, b.total_traveler, b.booked_on, 
        tp.title as "Travel Package" ,
        (SELECT name FROM destinations WHERE id=tp.from_destination) as "from", 
        (SELECT name FROM destinations WHERE id=tp.to_destination) as "to", 
        tp.start_date, tp.end_date, p.paidamount 
        FROM travel_package_booking b 
        JOIN travel_package tp ON b.travel_package = tp.id 
        JOIN Payment p ON b.payment_id = p.payment_id  
        WHERE user_id = ${user_id}`
        ,(err,res) => {
            if(err){
                console.log("error while getting travel package booking by user_id")
                result(err,null)
                return
            }

            if(res.length) {
                console.log("found travel package booking by user_id: ", res)
                result(null,res)
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

module.exports = TravelPackageBooking   