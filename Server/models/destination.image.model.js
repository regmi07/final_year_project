const sql = require('./database')

const DestinationImage = function(destinationImage){
    this.id = destinationImage.id
    this.type = destinationImage.type
    this.name = destinationImage.name
    this.imagesrc = destinationImage.imagesrc
    this.destinationid = destinationImage.destinationid
}

DestinationImage.create = (newDestinationImage,result) => {
    sql.query(`INSERT INTO destinationimage SET ?`,newDestinationImage,(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log("created destinationimage", {id: res.insertId, ...newDestinationImage})
        result(null,{id: res.insertId, ...newDestinationImage})
    })
}

DestinationImage.findBy = (data,field,result) => {
    sql.query(`SELECT * FROM destinationimage WHERE ${field} = ?`,data[field],(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found destinationimage with ${field} = ${data[field]}`, res[0])
            result(null,res[0])
            return
        }

        //not found field with data[field]
        result({kind: 'not_found'},null)
    })
}

DestinationImage.updateById = (id,destinationimage,result) => {
    sql.query(`UPDATE destinationimage SET type = ?, name = ?, data = ?, destinationid = ? where id = ?`,
        [destinationimage.type, destinationimage.name, destinationimage.imagesrc, destinationimage.destinationId, id],
        (err,res) => {
            if(err){
                console.log(err)
                result(err,null)
                return
            }

            if(res.affectedRows == 0) {
                //not found destinationimage with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated destination image: ", {id: id, ...destinationimage})
            result(null, {id: id, ...destination})
        }
    )
}

DestinationImage.remove = (data,field,result) => {
    sql.query(`DELETE FROM destinationimage WHERE ${field} = ?`,data[field], (err,res) => {
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
      
          console.log(`deleted destinationimage with ${field} =  ${data[field]}`);
          result(null, res);
    })
}

module.exports = DestinationImage