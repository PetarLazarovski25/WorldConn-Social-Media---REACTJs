const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post