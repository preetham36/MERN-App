const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged in User
// @access      Public
router.get('/', (req, res) =>{
    res.send('Get logged in user');
});

// @route       POST api/auth
// @desc        Auth User & Get Token
// @access      Public
router.post('/', (req, res) =>{
    res.send('Log in user');
});


module.exports = router;