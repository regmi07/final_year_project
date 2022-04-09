const sql = require("./database.js")

//constructor
const Destination = function(destination) {
    this.name = destination.name
    this.location = destination.location
    this.description = destination.description
    this.averagerating = destination.averagerating
    this.category = destination.category
    this.longitude = destination.longitude,
    this.latitude = destination.latitude
}

Destination.create = (newDestination, result) => {
    sql.query(`INSERT INTO destinations SET ?`, newDestination, (err, res) => {
        if(err){
            console.log("here is error: ", err)
            result(err,null)
            return
        }

        console.log("created destination: ", {id: res.insertId, ...newDestination})
        result(null, {id: res.insertId, ...newDestination})
    })
}

Destination.findById = (id, result) => {
    sql.execute(`SELECT d.id, d.name, d.averageRating, d.description, d.category as category, di.imagesrc FROM destinations d JOIN destinationimage di on d.id = di.destinationid WHERE d.id = ${id}`, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found destination: ", res[0])
            // console.log(res[0].category.split(','))
            // console.log({...res[0], category: res[0].category.split(',')})
            result(null,{...res[0], category: res[0].category.split(','), imagesrc: res.map(r => r.imagesrc)})
            return
        }

        //not found destination with the id
        result({kind: "not_found"}, null)
    })
}

Destination.getAll = (destinationname,result) => {
    let query = "SELECT * FROM destinations "
    if(destinationname){
        query += `WHERE name LIKE '%${destinationname}%'`
    }

    sql.query(query, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        console.log("destinations: ", res)
        result(null,res)
    })
}

Destination.updateById = (id,destination,result) => {
    sql.query(
        "UPDATE destinations SET name = ?, location = ?, description = ?, category = ?, averagerating = ?, longitude = ?, latitude = ? WHERE id = ?",
        [destination.name, destination.location, destination.description, destination.category, destination.averagerating, destination.longitude, destination.latitude, id],
        (err, res) => {
            if(err) {
                console.log("error: ", err)
                result(null,err)
                return
            }

            if(res.affectedRows == 0) {
                //not found destination with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated destination: ", {id: id, ...destination})
            result(null, {id: id, ...destination})
        }
    )
}

Destination.remove = (id,result) => {
    sql.query("DELETE FROM destinations WHERE id = ?", id, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found Tdestination with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted destination with id: ", id);
          result(null, res);
    })
}

Destination.removeAll = result => {
    sql.query("DELETE FROM destinations", (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`deleted ${res.affectedRows} destinations`);
          result(null, res);
    })
}

Destination.getAllCategories = result => {
    sql.query("SELECT DISTINCT category FROM destinations", (err,res) => {
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

Destination.getTotalDestination = result => {
    sql.query(`SELECT DISTINCT COUNT(*) as "total_destination" FROM destinations`, (err,res) => {
        if(err){
            console.log(err)
            result(null,err)
            return
        }

        console.log('total destinations: ', res)
        result(null,res)
    })
}

Destination.getAllDestinationName = result => {
    sql.query(`SELECT name FROM destinations`, (err,res) => {
        if(err){
            console.log(err)
            result(null,err)
            return
        }

        console.log('destinations: ', res)
        result(null,res)
    })
}

module.exports = Destination