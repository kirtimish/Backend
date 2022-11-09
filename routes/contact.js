const path = require('path');
const express = require('express');
const router = express.Router();
const contactControls = require('../controllers/contactcontrols')

router.get('/contactus',contactControls.getContactForm);

module.exports = router;