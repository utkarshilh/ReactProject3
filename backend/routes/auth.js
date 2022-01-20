const express = require('express');
const { Mongoose } = require('mongoose');
// const User = require('../models/User')
const router = express.Router();




// const { body, validationResult } = require('express-validator');



// create a user using: post "/api/aut"
// router.post('/', [
//     body('name').isLength({ min: 3 }),
//     body('email').isEmail(),
//     body('password').isLength({ min: 5 }),


// ], (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

// })

router.get('/', (req, res) => {
    console.log(req.body);


    const user = User(req.body);
    user.save();

    res.send(req.body);



})


module.exports = router;


