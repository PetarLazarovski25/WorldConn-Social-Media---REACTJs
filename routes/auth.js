const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// @method POST '/api/auth/register'
// @desc   REGISTER USER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

// @method POST '/api/auth/login'
// @desc   LOGIN 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            res.status(404).send('User not found')
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {
            res.status(400).json({ msg: 'Wrong Password' })
        } else {
            res.status(200).json({ user })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Server Error' })
    }
})
module.exports = router