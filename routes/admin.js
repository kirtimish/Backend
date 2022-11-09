const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop-addProd.html'));
})

router.post('/add-product', (req,res,next) => {
    console.log(req.body.name, req.body.size);
    res.redirect("/");
})

module.exports = router;