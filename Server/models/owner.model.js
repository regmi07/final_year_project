const sql = require("./database.js")

// SELECT * FROM rooms r LEFT JOIN booked_room br ON r.roomid = br.room_id 
// LEFT JOIN booking b on br.booking_id = b.booking_id 
// WHERE (br.room_id IS NULL OR (b.check_out_date < '2022-04-09' OR b.check_in_date > '2022-04-09')) AND hotel = 13;

//constructor
const Owner = function(owner) {
    this.name = owner.name
    this.location = owner.location
    this.description = owner.description
    this.category = owner.category
    this.destinationid = owner.destinationid
    this.longitude = owner.longitude
    this.latitude = owner.latitude
}

Owner.create = (newOwner, result) => {
    sql.query(`INSERT INTO owners SET ?`, newOwner, (err, res) => {
        if(err){
            console.log("here is error: ", err)
            result(err,null)
            return
        }

        console.log("created owner: ", {id: res.insertId, ...newOwner})
        result(null, {id: res.insertId, ...newOwner})
    })
}

Owner.findById = (id, result) => {
    sql.execute(
        `SELECT DISTINCT o.id, o.name, o.description, o.location, o.longitude, o.latitude, 
        (SELECT avg(rating) FROM reviews where owner = o.id) as 'average_rating', 
        hi.imagesrc FROM owners o 
        JOIN hotelimage hi ON 
        o.id = hi.ownerid
        WHERE o.id = ${id} LIMIT 5`
    , (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found owner: ", res)
            result(null,{...res[0], imagesrc: res.map(r => r.imagesrc)})
            return
        }

        //not found destination with the id
        result({kind: "not_found"}, null)
    })
}

Owner.getAll = (ownername,result) => {
    let query = "SELECT * FROM owners "
    if(ownername){
        query += `WHERE name LIKE '%${ownername}%'`
    }

    sql.query(query, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        console.log("owners: ", res)
        result(null,res)
    })
}

Owner.getHotelsAvailableForBookingByDestination = (bookinginfo, result) => {
    sql.query(
        `SELECT o.id, o.name, o.destinationid, r.price as "pricepernight", 
        (SELECT avg(rating) FROM reviews where owner = id) as 'average_rating',
        o.coverimage, o.cancellation, o.pay_at_stay 
        From owners o JOIN rooms r on o.id = r.hotel 
        LEFT JOIN booked_room br ON r.roomid = br.room_id 
        LEFT JOIN booking b on b.booking_id = br.booking_id 
        WHERE (br.room_id IS NULL OR (b.check_out_date < '${bookinginfo.checkindate}' OR b.check_in_date > '${bookinginfo.checkoutdate}')) 
        AND o.destinationid='${bookinginfo.destination}'
        GROUP BY o.name HAVING COUNT(*) >= ${bookinginfo.rooms}`
    , (err,res) => {
        if(err){
            console.log('error: ', err)
            result(err,null)
            return
        }

        if(res.length){
            console.log('found hotels', res)
            result(null,res)
            return
        }

        result({kind: "not_found"},null)
    })
}

Owner.getByDestination = (destid, result) => {
    sql.query(`SELECT * FROM owners WHERE destinationid = ${destid}`, (err, res) => {
        if(err){
            console.log('error: ', err)
            result(err, null)
            return
        }

        if(res.length) {
            console.log("found owners")
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

Owner.updateById = (id,owner,result) => {
    sql.query(
        "UPDATE owners SET name = ?, location = ?, description = ?, category = ?, destinationid = ?, longitude = ?, latitude = ? WHERE id = ?",
        [owner.name, owner.location, owner.description, owner.category, owner.destinationid, owner.longitude, owner.latitude, id],
        (err, res) => {
            if(err) {
                console.log("error: ", err)
                result(null,err)
                return
            }

            if(res.affectedRows == 0) {
                //not found owner with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated owner: ", {id: id, ...owner})
            result(null, {id: id, ...owner})
        }
    )
}

Owner.remove = (id,result) => {
    sql.query("DELETE FROM owners WHERE id = ?", id, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found owner with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted owner with id: ", id);
          result(null, res);
    })
}

Owner.removeAll = result => {
    sql.query("DELETE FROM owners", (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`deleted ${res.affectedRows} owners`);
          result(null, res);
    })
}

Owner.getAllCategories = result => {
    sql.query("SELECT DISTINCT category FROM owners", (err,res) => {
        if(err){
            console.log("error: ", err)
            result(null,err)
            return
        }

        console.log("categories", res)
        newres = res.map(value => value['category'].split(','))
        cat = [].concat.apply([], newres);
        // console.log(Array.isArray(Array.from(new Set(cat))))
        result(null,Array.from(new Set(cat)))
    })
}

Owner.getTotalOwner = result => {
    sql.query(`SELECT DISTINCT COUNT(*) as "total_owners" FROM owners`, (err,res) => {
        if(err){
            console.log(err)
            result(null,err)
            return
        }

        console.log('total owners: ', res)
        result(null,res)
    })
}

Owner.getAllOwnerName = result => {
    sql.query(`SELECT name FROM owners`, (err,res) => {
        if(err){
            console.log(err)
            result(null,err)
            return
        }

        console.log('owners: ', res)
        result(null,res)
    })
}

// const addAmenities = () => {}

module.exports = Owner