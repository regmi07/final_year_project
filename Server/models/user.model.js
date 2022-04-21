const sql = require("./database.js")

//constructor
const User = function(user) {
    this.name = user.name
    this.email = user.email
    this.username = user.username
    this.password = user.password
    this.role = user.role
}

User.create = (newUser, result) => {
    sql.query(`INSERT INTO users SET name = ?, email = ?, username = ?, password = ?, role = ?`, [newUser.name,newUser.email,newUser.username,newUser.password,newUser.role], (err, res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        console.log("created user: ", {id: res.insertId, ...newUser})
        result(null, {id: res.insertId, ...newUser})
    })
}

// User.signin = (username,role, result) => {
//     sql.query(`SELECT * FROM users WHERE username = ? AND role = ?`,[username, role], (err,res) => {
//         if(err){
//             console.log(err, " here is error")
//             result(err,null)
//             return
//         }

//         if(res.length){
//             console.log(`found user with username = ${username}`)
//             result(null,res[0])
//             return
//         }

//         //not found admin with user_name
//         result({kind: 'not_found'}, null)
//     })
// }

User.findById = (id, result) => {
    sql.query(`SELECT id,name,email,username,profilepicture,role FROM users WHERE id = ${id}`, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found user: ", res[0])
            result(null,res[0])
            return
        }

        //not found user with the id
        result({kind: "not_found"}, null)
    })
}

User.findBy = (data,field,result) => {
    sql.query(`SELECT * FROM users WHERE ${field} = ?`, data[field], (err,res) => {
        if(err){
            console.log(err)
            result(err,null)
            return
        }

        if(res.length){
            console.log(`found user with ${field} = ${data[field]}`, res[0])
            result(null,res[0])
            return
        }

        //not found field with data[field]
        result({kind: 'not_found'},null)
    })
}

User.getAll = (name,result) => {
    let query = "SELECT id,name,email,username,profilepicture FROM users "
    if(name){
        query += `WHERE name LIKE '%${name}%'`
    }

    sql.query(query, (err,res) => {
        if(err){
            console.log("error: ", err)
            result(err,null)
            return
        }

        console.log("users: ", res)
        result(null,res)
    })
}

User.updateById = (id,user,result) => {
    sql.query(
        "UPDATE users SET name = ?, email = ?, username = ? WHERE id = ?",
        [user.name, user.email, user.username, id],
        (err, res) => {
            if(err) {
                console.log("error: ", err)
                result(null,err)
                return
            }

            if(res.affectedRows == 0) {
                //not found user with the id
                result({kind: "not_found"}, null)
                return
            }

            console.log("updated user: ", {id: id, ...user})
            result(null, {id: id, ...user})
        }
    )
}

User.updateBy = (id,field,value,result) => {
    sql.query(`UPDATE users SET ${field} = ? WHERE id = ?`, [value,id], (err, res) => {
        if(err){
            console.log("error: ", err)
                result(null,err)
                return
        }
        if(res.affectedRows == 0) {
            //not found user with the id
            result({kind: "not_found"}, null)
            return
        }

        console.log(`updated user: id = ${id}, ${field} = ${value} `)
        result(null, {id: id, field: field, value: value})
    })
} 

User.updateProfilePicture = (id, profilePicture, result) => {
    sql.query(`UPDATE users SET profilePicture = '${profilePicture}' WHERE id= ${id}`, (err,res) => {
        if(err){
            console.log("error: ", err)
                result(null,err)
                return
        }
        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log(`updated profile picture of user: ${id}`)
        result(null, {id: id, profilePicture: profilePicture})
    })
}

User.updatePassword = (id, password, result) => {
    sql.query(`UPDATE users SET password = '${password}' WHERE id=${id}`, (err,res) => {
        if(err){
            console.log("error: ", err)
                result(null,err)
                return
        }
        if(res.affectedRows == 0) {
            result({kind: "not_found"}, null)
            return
        }

        console.log(`updated password of user: ${id} `)
        result(null, {id: id})
    })
}

User.findPasswordById = (id, result) => {
    sql.query(`SELECT password FROM users WHERE id=${id}`, (err,res) => {
        if(err){
            console.log(err, ' while getting password by user id')
            result(null,err)
            return
        }
        result(null, res)
    })
}

User.remove = (id,result) => {
    sql.query("DELETE FROM users WHERE userid = ?", id, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted user with id: ", id);
          result(null, res);
    })
}

User.removeAll = result => {
    sql.query("DELETE FROM users", (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`deleted ${res.affectedRows} users`);
          result(null, res);
    })
}

User.getTotalUser = result => {
    sql.query(`SELECT DISTINCT COUNT(*) as "total_user" FROM users`, (err,res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        
        console.log("total user ", res)
        result(null,res)
    })
}

module.exports = User