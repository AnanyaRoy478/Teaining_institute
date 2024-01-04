const jwt = require ('jsonwebtoken');
const dotenv = require("dotenv");


//dot  config
dotenv.config()

const checkLogin = (req,res,next)=>{
    const {authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email, password } = decoded;
        next();
    } catch {
        next('Authentication Failiure !')
    }
}

module.exports = checkLogin;