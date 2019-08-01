const mysql = require("mysql");
require('dotenv').config()

// Localhost

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: "products"
// });

// Heroku

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: process.env.USER_HEROKU,
    password: process.env.PASSWORD_HEROKU,
    database: "heroku_073aa483c0acda9"
});

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the MySQL server");
    }
});

module.exports=connection;
