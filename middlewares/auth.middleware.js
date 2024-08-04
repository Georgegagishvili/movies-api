const jwt = require('jsonwebtoken')
const { AUTHENTICATION_FAILED, INVALID_JWT_TOKEN } = require('../utils/user.errors')

const authenticateJWT = (req,res, next) => {
    const token = req.headers.authorization.replace("Bearer ", "")
    console.log(token)

    if(!token) {
        return res.status(401).json({
            success: false,
            message: AUTHENTICATION_FAILED
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
    }catch(err) {
        res.status(400).json({
            success:false,
            message: INVALID_JWT_TOKEN
        })
    }
}

module.exports = authenticateJWT 