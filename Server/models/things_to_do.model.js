const sql = require("./database.js")

const ThingsToDo = function(things_to_do){
    this.name = things_to_do.name
    this.description = things_to_do.description
    this.destination_id = things_to_do.destination_id
}

ThingsToDo.create = (newThingsToDo, result) => {
    sql.query(`INSERT INTO things_to_do SET ?`, newThingsToDo, (err,res) => {
        if(err){
            console.log("error while inserting things_to_do")
            result(err,null)
            return
        }

        console.log("created things_to_do: ", {id: res.insertId, ...newThingsToDo})
        result(null, {id: res.insertId, ...newThingsToDo})
    })
}

ThingsToDo.findById = (id, result) => {
    sql.execute(`SELECT t.id, t.name, t.description, t.destination_id, ti.imagesrc FROM things_to_do t JOIN things_to_do_image ti ON t.id = ti.things_to_do_id WHERE t.id = ?`, [id], (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found things_to_do: ", res[0])
            result(null,{...res[0], imagesrc: res.map(r => r.imagesrc)})
            return
        }

        //not found destination with the id
        result({kind: "not_found"}, null)
    })
}

ThingsToDo.getAll = (things_to_do_name, result) => {
    let query = "SELECT * FROM things_to_do "
    if(things_to_do_name){
        query += `WHERE name LIKE '%${things_to_do_name}%'`
    }

    sql.query(query, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        console.log("things_to_do: ", res)
        result(null,res)
    })
}

ThingsToDo.findByDestination = (id, result) => {
    sql.execute(`SELECT * FROM things_to_do WHERE destination_id = ?`, [id], (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found things_to_do: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

ThingsToDo.updateById = (id,things_to_do,result) => {
    sql.query(
        "UPDATE things_to_do SET name = ?, description = ?, destination_id = ? WHERE id = ?",
        [things_to_do.name, things_to_do.description, things_to_do.destination_id, id],
        (err, res) => {
            if(err) {
                console.log("error: ", err)
                result(null,err)
                return
            }

            if(res.affectedRows == 0) {
                //not found things_to_do with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated things_to_do: ", {id: id, ...things_to_do})
            result(null, {id: id, ...things_to_do})
        }
    )
}

ThingsToDo.remove = (id,result) => {
    sql.query("DELETE FROM things_to_do WHERE id = ?", id, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found Things to fo with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted things to do with id: ", id);
          result(null, res);
    })
}

module.exports = ThingsToDo