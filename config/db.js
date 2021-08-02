const mongoose = require('mongoose')
const db = 'mongodb+srv://petarlazarovski:petarlazarovski@cluster0.fkjjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Mongoose Database connected.')
    } catch (error) {
        console.log('Couldnt connect Mongoose Database')
    }
}

module.exports = connectDB