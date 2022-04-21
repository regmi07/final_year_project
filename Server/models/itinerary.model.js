const sql = require("./database.js")

const Itinerary = function(itinerary) {
    this.title = itinerary.title
    this.day = itinerary.day
    this.duration = itinerary.duration
    this.description = itinerary.description
    this.travel_package = itinerary.travel_package
}

Itinerary.create = function(newItinerary, result) {
    sql.query(`INSERT INTO itinerary SET ?`, newItinerary, (err,res) => {
        if(err){
            console.log("error occured while creating itinerary: ", err)
            result(err,null)
            return
        }
        console.log("created itinerary: ", {id: res.insertId, ...newItinerary})
        result(null, {id: res.insertId, ...newItinerary})
    })
}

Itinerary.findByTravelPackage = (package_id, result) => {
    sql.query(`SELECT * FROM itinerary WHERE travel_package=${package_id}`, (err,res) => {
        if(err){
            console.log("error while getting itinerary by travel_package: ", err)
            result(err,null)
            return
        }

        if(res.length){
            console.log("found itinerary by travel_package: ", res)
            result(null,res)
            return
        }

        result({kind: "not_found"}, null)
    })
}

Itinerary.updateById = (id, itinerary, result) => {
    sql.query("UPDATE itinerary SET ? WHERE id=?", [itinerary, id], (err,res) => {
        if(err){
            console.log("error while updating itinerary by id: ", err)
            result(err,null)
            return
        }

        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated itinerary: ", {id: id, ...itinerary})
        result(null, {id: id, ...itinerary})
    })
}

Itinerary.removeById = (id, result) => {
    sql.query("DELETE FROM itinerary WHERE id = ?", id, (err,res) => {
        if (err) {
            console.log("error while removing itinerary by id: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
          }
        
          console.log("deleted itinerary with id: ", id);
          result(null, res);
    })
}

module.exports = Itinerary