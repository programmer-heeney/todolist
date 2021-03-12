// main-route.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/", function(req, res) {
    console.log("index");
    res.sendFile(path.join(__dirname, "../index.html"));
})

router.get("/mail", function(req, res) {
    console.log("index");
    res.sendFile(path.join(__dirname, "../public/mail.html"));
})

const controller_main = require("../controllers/main-controller");
router.get('/db', controller_main.GetJsonList);

module.exports = router;