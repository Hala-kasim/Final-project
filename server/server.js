const mysql = require('mysql');
const config = require("./../db/db.config");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	port: config.port,
    database: config.database
});

//or 
//let connection = mysql.createConnection(config);

 connection.connect(); 

connection.query('use quinoa;', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    console.log('connected!');
});
// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.json());

// get request
app.get('/home', function(req,res) {
    
    connection.query('select * from tags;', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        console.log('tags are here!');
        res.json(results);
    });
    
    // res.end("File....");
})
//connection.end();

app.get('/:tags', (req,res) => {
    let sql = "SELECT category_name, tag_name, water_consumption FROM categories_tags JOIN categories ON categories.category_id = categories_tags.category_id JOIN tags ON tags.tag_id = categories_tags.tag_id WHERE tag_name = ?";
    let value = req.params.tag;
    console.log('params:', req.params);
    connection.query(sql, value, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        console.log('tags are here!');
        res.json(results);
    });
    console.log('done!...');
    //connection.end();
 });


app.listen(4000,function(){
    console.log("Working on port 4000");
});
