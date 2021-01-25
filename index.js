var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./models');
var http = require('http').Server(app);
var router = express.Router();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'GET');
        return res.status(200).json({});
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(upload.array());
app.use(express.static('public'));
app.get('/sync', function(req, res) {
    db.sequelize.sync({ forced: true, logging: console.log }).then(res.json({ "completed": "true" }).catch(async data => await console.log("kkkkkkkkkkkkkkkk" + data)));
});
app.get('/drop', function(req, res) {
    db.sequelize.drop().then(async data => await res.send("completed")).catch(err => console.log("error" + err));
})
app.listen(355,()=>{
    console.log("started the server")
})