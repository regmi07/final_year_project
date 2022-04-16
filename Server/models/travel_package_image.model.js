const sql = require('./database')

const TravelPackageImage = function(travelPackageImage){
    this.id = travelPackageImage.id
    this.type = travelPackageImage.type
    this.name = travelPackageImage.name
    this.imagesrc = travelPackageImage.imagesrc
    this.travel_package = travelPackageImage.travelPackageId
}

TravelPackageImage.create = (newTravelPackageImage,result) => {
    sql.query(`INSERT INTO travel_package_image SET ?`, newTravelPackageImage, (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log("created travel_package_image", {id: res.insertId, ...newTravelPackageImage})
        result(null,{id: res.insertId, ...newTravelPackageImage}) 
    })
}

TravelPackageImage.remove = (id,result) => {
    sql.query(`DELETE FROM travel_package_image WHERE id = ${id}`, (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log(`deleted travel_package_image with ${field} =  ${data[field]}`);
          result(null, res);
    })
}

module.exports = TravelPackageImage