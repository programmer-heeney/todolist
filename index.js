// index.js

const express = require('express');
const app = express();
const PORT = 28000;

app.use('/static', express.static(__dirname + '/public'));

app.listen(PORT, function (req, res) {
    console.log("Server is listening as http://localhost:", PORT);
})

// app.get("/", function(req, res) {
//     res.send("Hello World!");
// })

app.get("/mail", function(req, res) {
    res.sendFile(__dirname+'/public/mail.html');
})

app.get("/send", function(req, res) {
    const email = req.query.email;
    res.send(email);
})

app.use(express.json());
app.use(express.urlencoded( {extended: false} ));
app.post("/send", function(req, res) {
    const email = req.body.email;
    res.send(email);
})

const mysql = require("mysql");

const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'test',
    password: 'test123',
    database: "testdb"
})

dbConnection.connect()

app.post('/send_mysql', async function(req, res) {
    const email = req.body.email;
    dbConnection.query('SELECT * FROM user' , function(err, rows) {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0]);
        }
    });
    res.send(email);
})

const module1 = require('./test')
console.log(module1.test(33));

const routerMain = require('./routes/main-route');
app.use('/', routerMain);