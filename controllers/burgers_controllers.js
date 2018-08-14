const express = require('express');
const router = express.Router();

router.get('/views', function(req, res){
    res.render('index');
})