// main-controller.js

// exports.GetJsonList = function(req, res) {
//     const json = {title:"view", data:"value1"};
//     console.log(json);
//     res.send(json);
// }

const service_main = require('../services/main-service');

exports.GetJsonList = async function(req, res) {
    const result = await service_main.GetJsonList();
    const json = {title:"view", data:result};
    console.log(json);
    res.send(json);
}