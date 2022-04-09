const mysql = require('mysql2')
const databaseconfig = require("../config/database.config.js")

//create a connection to the database
const connection = mysql.createConnection({
    host: databaseconfig.HOST,
    user: databaseconfig.USER,
    password: databaseconfig.PASSWORD,
    database: databaseconfig.DB
})

connection.connect(error => {
    if(error) throw error
    console.log("successfully connected to the database")
})

module.exports = connection