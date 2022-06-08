const User = require('../Models/User.model')
const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');

const createToken = (user) => {
    return JWT.sign({
        id: user._id,
        isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: '3d'
    }
    )
}
const authSignupController = async ( req, res ) => {
    const {username, email, password } = req.body
    try {
        const newUser = await new User({
            username, 
            email, 
            password: await CryptoJS.AES.encrypt(
                password, 
                process.env.HASH_PASSWORD_SENTENCE
            ).toString()
        })
        await newUser.save()
        res.status(200).json({status: 200, newUser})
    }
    catch(error) {
        res.status(500).json({status: 500, error: error.message})
    }
}

const authLoginController = async ( req, res ) => {
    const { email } = req.body
    try {
        let checkUser = await User.checkLogin(email, req.body.password)
        const {password, ...others } = checkUser._doc;
        const token = createToken(checkUser);
        res.status(200).json({status: 200, user: others, token})
    }
    catch(error) {
        res.status(500).json({status: 500, error: error.message})
    }
}

module.exports = {
    authSignupController, 
    authLoginController
}