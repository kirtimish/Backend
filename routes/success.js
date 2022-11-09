const path = require('path');
const express = require('express');
const router = express.Router();
const contactControls = require('../controllers/contactcontrols')

router.get('/success',contactControls.getSuccessPage);

router.post('/success', contactControls.postsuccesspage);

module.exports = router;