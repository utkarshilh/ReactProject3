const express = require('express');
const { Mongoose } = require('mongoose');
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

const JWT_SECRET = "UtkarshIsGood$Boy"




const { body, validationResult } = require('express-validator');



// create a user using: post "/api/auth/createuser"  no loging required


router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'must contain atleast 5 character').isLength({ min: 5 }),


], async (req, res) => {

    // if there are error then returns bad request and the errors 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check wheter the user with this email  exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "sorry the user with this email already exists" });


    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {

        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });

        // .then(user => res.json(user))
        //     .catch(err => {
        //         console.log(err)
        //         res.json({ error: 'please enter a unique value ', message: err.message })
        //     })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData);
        // res.json(user);

        res.json({ authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");

    }
})




module.exports = router;


