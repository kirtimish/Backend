const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="name"><input type="text" name="size"><button type="submit">Send</button></form>')
})

router.post('/add-product', (req,res,next) => {
    console.log(req.body.name, req.body.size);
    res.redirect("/");
})

module.exports = router;