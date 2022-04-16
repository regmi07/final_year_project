const sql = require("./database.js")

const TravelAgency = function(travelAgency){
    this.name = travelAgency.name
    this.email = travelAgency.email
    this.location = travelAgency.location
    this.description = travelAgency.description
    this.phone = travelAgency.phone
}

TravelAgency.create = (newTravelAgency, result) => {
    sql.query(`INSERT INTO travel_agency SET ?`, newTravelAgency, (err,res) => {
        if(err){
            console.log("error occured while creating travel agency")
            result(err,null)
            return
        }

        console.log("created travel agency", {id: res.insertId, ...newTravelAgency})
        result(null, {id: res.insertId, ...newTravelAgency})
    })
}

TravelAgency.findById = (id, result) => {
    sql.query(
        `SELECT * FROM travel_agency WHERE id=${id}`
        ,(err,res) => {
            if(err){
                console.log("error while getting travel agency by id")
                result(err,null)
                return
            }

            if(res.length) {
                console.log("found travel agency: ", res)
                result(null,{...res[0]})
                return
            }
            result({kind: "not_found"}, null)
        }
    )
}

TravelAgency.updateUser = (id,user,result) => {
    sql.query(`UPDATE travel_agency SET agency_user = ${user} where id=${id}`, (err, res) => {
        if(err){
            console.log('error while updating agency_user')
            result(null,err)
            return
        }

        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated travel_agency agency_user: ", {user, agency_id: id})
        result(null, {user, agency_id: id})
    })
}

TravelAgency.updateAll = (id, travelAgency, result) => {
    sql.query(`UPDATE travel_agency SET ? WHERE id = ?`, [travelAgency, id], (err, res) => {
        if(err){
            console.log('error while updating travel_agency')
            result(null,err)
            return
        }

        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated travel_agency: ", {id, ...travelAgency})
        result(null, {id, ...travelAgency})
    })
}

module.exports = TravelAgency