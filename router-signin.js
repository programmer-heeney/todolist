const express = require('express');
const app = express();
const PORT = 28000;

app.listen(PORT, function () {
    console.log("App server is listening port ", PORT);
})

app.get('/', function (req, res) {
    res.send('Hello world!');
})

app.get('/signin', function (req, res) {
    res.sendFile("C:/Users/heejeong/Desktop/Code/todolist/index.html");
})

app.get('/signout', function (req, res) {
    res.send('signout');
})