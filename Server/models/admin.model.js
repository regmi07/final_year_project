const sql = require("./database.js")

//constructor
const Admin = function(admin){
    this.name = admin.name
    this.email = admin.email
    this.user_name = admin.user_name
    this.password = admin.password
    this.contact_num = admin.contact_num
}

Admin.create = (newAdmin, result) => {
    sql.query(`INSERT INTO admin SET ?`, newAdmin, (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        console.log("created admin: ", {id: res.insertId, ...newAdmin})
        result(null, {id: res.insertId, ...newAdmin})
    })
       
}

Admin.findBy = (data,field,result) => {
    sql.query(`SELECT * FROM admin WHERE ${field} = ?`, data[field], (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found admin with ${field} = ${data[field]}`, res[0])
            result(null,res[0])
            return
        }

        //not found field with data[field]
        result({kind: 'not_found'},null)

    })
}


Admin.signin = (user_name, result) => {
    sql.query(`SELECT * FROM admin WHERE user_name = ?`,[user_name], (err,res) => {
        if(err){
            console.log(err, " here is error")
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found admin with user_name = ${res[0]}`)
            result(null,res[0])
            return
        }

        //not found admin with user_name
        result({kind: 'not_found'}, null)
    })
}

module.exports = Admin

