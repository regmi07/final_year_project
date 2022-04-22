const sql = require('./database');

const VisitList = function(visitList){
    this.destination = visitList.destination,
    this.user = visitList.user,
    this.type = visitList.type,
    this.visit_summary = visitList.visit_summary,
    this.experience = visitList.experience,
    this.things_did = visitList.things_did,
    this.stay = visitList.stay,
    this.transportation = visitList.transportation,
    this.sites = visitList.sites
}

VisitList.create = (newVisitList, result) => {
    sql.query(`INSERT INTO visit_list SET ?`, newVisitList, (err,res) => {
        if(err){
            console.log('error while creating visit list')
            result(err,null)
            return
        }

        console.log("created visit list: ", newVisitList)
        console.log(typeof newVisitList)
        result(null, newVisitList)
    })
}

VisitList.findPlanToVisitListByUser = (user, result) => {
    sql.query(`SELECT vl.destination, d.name, d.location, d.coverimage FROM visit_list vl 
    JOIN destinations d ON vl.destination = d.id 
    WHERE vl.user=${user} AND vl.type='plan to visit'`, (err,res) => {
        if(err){
            console.log('error while getting plan to visit list by user')
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found plan to visit list: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

VisitList.findVisitedListByUser = (user, result) => {
    sql.query(`SELECT vl.destination, vl.visit_summary, vl.experience, vl.things_did, vl.stay, vl.transportation, vl.sites, d.name, d.location, d.coverimage 
    FROM visit_list vl JOIN destinations d ON vl.destination = d.id WHERE vl.user = ${user} AND vl.type='visited'`,
    (err, res) => {
        if(err){
            console.log('error while getting visited list by user')
            result(err,null)
            return
        }
        if(res.length) {
            console.log("found visited list: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

VisitList.findVisitedListByDestination = (destination, result) => {
    sql.query(`SELECT vl.user, vl.visit_summary, vl.stay, vl.transportation, vl.sites, u.username, u.name, u.profilePicture  
    FROM visit_list vl 
    JOIN users u ON vl.user = u.id 
    WHERE vl.destination=${destination} AND vl.type = 'visited'`,
    (err,res) => {
        if(err){
            console.log('error while getting visited list by destination')
            result(err,null)
            return
        }
        if(res.length) {
            console.log("found visited list: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

VisitList.findById = (user,destination,result) => {
    sql.query(`SELECT * FROM visit_list WHERE user=${user} AND destination=${destination} AND type='plan to visit'`, (err,res) => {
        if(err){
            console.log('error while getting visit list by id')
            result(err,null)
            return
        }
        if(res.length) {
            console.log("found visit list by id: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

VisitList.findVisitedListById = (user,destination,result) => {
    console.log(user, " user", destination, " destination")
    sql.query(`SELECT vl.user, u.username, u.name, u.profilePicture, 
    vl.destination, d.name, d.location, d.coverImage, 
    vl.visit_summary, vl.experience, vl.things_did, vl.stay, vl.transportation, vl.sites 
    FROM visit_list vl 
    JOIN users u ON vl.user = u.id 
    JOIN destinations d ON vl.destination = d.id 
    WHERE (vl.destination=${destination} AND vl.user=${user}) AND vl.type='visited'`,
    (err,res) => {
        if(err){
            console.log('error while getting visited list by id')
            result(err,null)
            return
        }
        if(res.length) {
            console.log("found visited list by id: ", res)
            result(null,res)
            return
        }
        result({kind: "not_found"}, null)
    })
}

VisitList.updateVisitedList = (visited_list,result) => {
    sql.query("UPDATE visit_list SET type = ?, visit_summary = ?, experience = ?, things_did = ?, stay = ?, transportation = ?, sites = ? WHERE user = ? AND destination = ?",
    [visited_list.type, visited_list.visit_summary, visited_list.experience, visited_list.things_did, visited_list.stay, visited_list.transportation, visited_list.sites, visited_list.user, visited_list.destination],
    (err,res) => {
        if(err) {
            console.log("error while updating visited list: ", err)
            result(null,err)
            return
        }

        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated visited list: ", visited_list)
        result(null, visited_list)
    })
}

VisitList.deleteVisitedListById = (user,destination,result) => {
    sql.query(`DELETE FROM visit_list WHERE user = ${user} AND destination = ${destination}`, (err,res) => {
        if (err) {
            console.log("error while deleting visited list: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted visited list with user: ", user, " and destination: ", destination)
          result(null, res);
    })
}

module.exports = VisitList