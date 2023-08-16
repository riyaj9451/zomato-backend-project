
var mysql = require('mysql');



var con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12609198",
    password: "Lb1DXrGAwM",
    database: "sql12609198",
    multipleStatements: true
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;