const sql = require('./database.js');

const TravelPackage = function(travelPackage){
    this.title = travelPackage.title
    this.from_destination = travelPackage.from_destination
    this.to_destination = travelPackage.to_destination
    this.start_date = travelPackage.start_date
    this.end_date = travelPackage.end_date
    this.priceperperson = travelPackage.priceperperson
    this.max_traveler = travelPackage.max_traveler
    this.travel_agency = travelPackage.travel_ageny
}

TravelPackage.create = (newTravelPackage, result) => {
    sql.query(`INSERT INTO travel_package SET ?`, newTravelPackage, (err,res) => {
        if(err){
            console.log("error occured while creating travel package")
            result(err,null)
            return
        }

        console.log("created travel package", {id: res.insertId, ...newTravelPackage})
        result(null, {id: res.insertId, ...newTravelPackage})
    })
}

TravelPackage.findById = (id, result) => {
    sql.query(
        `SELECT tp.title, tp.start_date, tp.end_date, tp.priceperperson, tp.max_traveler, tp.description, ta.name as "agency_name",  
        (SELECT name FROM destinations WHERE id=tp.from_destination) as "from", 
        (SELECT name FROM destinations WHERE id=tp.to_destination) as "to", 
        tpi.imagesrc
        FROM travel_package tp 
        JOIN travel_agency ta ON 
        tp.travel_agency = ta.id
        JOIN travel_package_image tpi ON 
        tpi.travel_package = tp.id 
        WHERE tp.id=${id} LIMIT 5`
        ,(err,res) => {
            if(err){
                console.log("error while getting travel package by id")
                result(err,null)
                return
            }

            if(res.length) {
                console.log("found travel package: ", res)
                result(null,{...res[0], imagesrc: res.map(r => r.imagesrc)})
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

TravelPackage.findByTravelAgency = (travel_agency_id, result) => {
    sql.query(
        `SELECT tp.title, tp.start_date, tp.end_date, tp.priceperperson, tp.max_traveler, ta.name as "agency_name",  
        (SELECT name FROM destinations WHERE id=tp.from_destination) as "from", 
        (SELECT name FROM destinations WHERE id=tp.to_destination) as "to" 
        FROM travel_package tp 
        JOIN travel_agency ta ON 
        tp.travel_agency = ta.id  
        WHERE tp.travel_agency=${travel_agency_id}`
        ,(err,res) => {
            if(err){
                console.log("error while getting travel package by travel agency")
                result(err,null)
                return
            }

            if(res.length) {
                console.log("found travel package by agency: ", res)
                result(null,res)
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

TravelPackage.findAvailablePackage = (start_date, end_date, total_traveler,from_dest,to_dest,travel_agency, result) => {
                // tp.max_traveler <= (SELECT sum(total_traveler) from travel_package_booking WHERE travel_package = tp.id)`
    let query = `SELECT tp.id, tp.title, tp.coverimage, tp.start_date, tp.end_date, tp.priceperperson, tp.max_traveler, ta.name as "agency_name", 
                (SELECT sum(total_traveler) from travel_package_booking WHERE travel_package = tp.id) as "booked", 
                (SELECT name FROM destinations WHERE id=tp.from_destination) as "from", 
                (SELECT name FROM destinations WHERE id=tp.to_destination) as "to" 
                FROM travel_package tp 
                JOIN travel_agency ta ON 
                tp.travel_agency = ta.id  
                WHERE tp.start_date >= '${start_date}'`

    if(end_date){
        console.log(end_date, 'end_date called')
        query += ` AND tp.end_date <= '${end_date}'`
    }

    if(from_dest){
        query += ` AND tp.from_destination = ${from_dest}`
    }

    if(to_dest){
        query += ` AND tp.to_destination = ${to_dest}`
    }

    if(travel_agency){
        query += ` AND tp.travel_agency = ${travel_agency}`
    }

    sql.query(query,(err,res) => {
            if(err){
                console.log("error while getting available travel package: ", err)
                result(err,null)
                return
            }

            if(res.length) {
                if(total_traveler && total_traveler !== '0')
                    res = res.filter((tp) => 
                    {
                        try{
                            tp.booked = tp.booked === null ? 0: parseInt(tp.booked)
                            total_traveler = parseInt(total_traveler)
                            return tp.max_traveler >= (tp.booked + total_traveler)
                        }catch(err){
                            console.log(err)
                        }
                    })
                console.log("found available travel package: ", res)
                result(null,res)
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

module.exports = TravelPackage