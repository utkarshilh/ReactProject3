const express = require('express');
const { Mongoose } = require('mongoose');
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = "UtkarshIsGood$Boy"




const { body, validationResult } = require('express-validator');



//Route1 creating   a user using: post "/api/auth/createuser"  no loging required


router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'must contain atleast 5 character').isLength({ min: 5 }),


], async (req, res) => {

    let success = false;


    // if there are error then returns bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // check wheter the user with this email  exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ success, error: "sorry the user with this email already exists" });


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

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData);
        // res.json(user);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server occured");

    }
})
//Route2 Authenticate a user using : post "/api/auth/login" . No login required
router.post('/login', [

    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {
    let sucess = false;

    // if there are error then returns bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            success = false;

            return res.status(400).json({ error: "please try to login with correct credential " });
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false;

            return res.status(400).json({ success, error: "please try to login with correct credential " });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server occured");

    }
})

// Route3 : Get Logged in User detail using Post api/auth/get user login requried


router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})

module.exports = router;


