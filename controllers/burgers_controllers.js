//Dependencies
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('index');
});

//export router for server.js
module.exports = router;