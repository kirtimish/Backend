const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoute = require('./routes/contact');
const successRoute = require('./routes/success');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactUsRoute);
app.use(successRoute);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
})

app.listen('3000');