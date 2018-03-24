var express = require('express');
var bodyParse = require('body-parser');
const config = require('./config/config.js')
var app = express();

app.use('/', express.static(__dirname + '/client'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

process.env.APP_SECRET = config.appSecret;


//--/////////////////////--//
//--    Personal API    --//
//--////////////////////--//
//Routes


app.listen(config.port, function(){
    console.log(`Server Running on Port: ${config.port}`)
})