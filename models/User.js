const { default: strictTransportSecurity } = require('helmet/dist/middlewares/strict-transport-security')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 3
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        max: 70
    },
    city: {
        type: String
    },
    from: {
        type: String
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User