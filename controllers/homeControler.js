const express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('layout/homeLayout')
});

module.exports = router;