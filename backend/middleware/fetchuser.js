var jwt = require('jsonwebtoken');
const JWT_SECRET = "UtkarshIsGood$Boy"

const fetchuser = (req, res, next) => {
    // Get the user from jwt token and add id to the request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();

    } catch (error) {
        res.status(401).send({ error: "please authenticate usign a valid token" })
    }



}

module.exports = fetchuser;
