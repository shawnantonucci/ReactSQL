const mysql = require("mysql");
require('dotenv').config()

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "products"
});

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the MySQL server");
    }
});

module.exports=connection;
