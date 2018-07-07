

const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.get('/usuario', function(req, res){
    res.json('getUsuario');
});

