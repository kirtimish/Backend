const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(loginRoutes);
app.use(messageRoutes);

app.use('/shop',shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h2>OOPs! page not found</h2>')
})

app.listen('3000');