const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.statics.checkLogin = async function(email, password) {
    const user = await User.findOne({email});

    if (!user) {
        throw Error('email is not found')
    } else {
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.HASH_PASSWORD_SENTENCE
        ).toString(CryptoJS.enc.Utf8)
        
        if( hashedPassword !== password ) { 
            throw Error('invalid password')
        } else {
            return user
        }
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User