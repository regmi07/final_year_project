const sql = require('./database')

const OwnerImage = function(ownerImage){
    this.id = ownerImage.id
    this.type = ownerImage.type
    this.name = ownerImage.name
    this.imagesrc = ownerImage.imagesrc
    this.ownerid = ownerImage.ownerid
}

OwnerImage.create = (newOwnerImage,result) => {
    sql.query(`INSERT INTO hotelimage SET ?`,newOwnerImage,(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log("created hotelimage", {id: res.insertId, ...newOwnerImage})
        result(null,{id: res.insertId, ...newOwnerImage})
    })
}

OwnerImage.findBy = (data,field,result) => {
    sql.query(`SELECT * FROM hotelimage WHERE ${field} = ?`,data[field],(err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found hotelimage with ${field} = ${data[field]}`, res[0])
            result(null,res[0])
            return
        }

        //not found field with data[field]
        result({kind: 'not_found'},null)
    })
}

OwnerImage.updateById = (id,ownerimage,result) => {
    sql.query(`UPDATE hotelimage SET type = ?, name = ?, data = ?, ownerid = ? where id = ?`,
        [ownerimage.type, ownerimage.name, ownerimage.imagesrc, ownerimage.ownerId, id],
        (err,res) => {
            if(err){
                console.log(err)
                result(err,null)
                return
            }

            if(res.affectedRows == 0) {
                //not found ownerimage with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated owner image: ", {id: id, ...ownerimage})
            result(null, {id: id, ...owner})
        }
    )
}

OwnerImage.remove = (data,field,result) => {
    sql.query(`DELETE FROM hotelimage WHERE ${field} = ?`,data[field], (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if (res.affectedRows == 0) {
            // not found Towner with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log(`deleted hotelimage with ${field} =  ${data[field]}`);
          result(null, res);
    })
}

module.exports = OwnerImage