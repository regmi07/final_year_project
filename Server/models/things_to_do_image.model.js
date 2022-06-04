const sql = require('./database')

const ThingsToDoImage = function(thingsToDoImage){
    this.id = thingsToDoImage.id
    this.type = thingsToDoImage.type
    this.name = thingsToDoImage.name
    this.imagesrc = thingsToDoImage.imagesrc
    this.things_to_do_id = thingsToDoImage.thingstodoid
}

ThingsToDoImage.create = (newThingsToDoImage,result) => {
    sql.query(`INSERT INTO things_to_do_image SET ?`,newThingsToDoImage,(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log("created things to do image", {id: res.insertId, ...newThingsToDoImage})
        result(null,{id: res.insertId, ...newThingsToDoImage})
    })
}

ThingsToDoImage.findBy = (data,field,result) => {
    sql.query(`SELECT * FROM things_to_do_image WHERE ${field} = ?`,data[field],(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found things to do image with ${field} = ${data[field]}`, res[0])
            result(null,res[0])
            return
        }

        //not found field with data[field]
        result({kind: 'not_found'},null)
    })
}

ThingsToDoImage.remove = (data,field,result) => {
    sql.query(`DELETE FROM things_to_do_image WHERE ${field} = ?`,data[field], (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if (res.affectedRows == 0) {
            // not found Tdestination with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log(`deleted things_to_do_image with ${field} =  ${data[field]}`);
          result(null, res);
    })
}

module.exports = ThingsToDoImage