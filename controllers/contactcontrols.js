const path = require('path');
const rootDir = require('../util/path');

exports.getContactForm = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
}

exports.getSuccessPage = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}

exports.postsuccesspage = (req,res,next) => {
    res.redirect("/success");
}