const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// @method PUT '/api/users/:id'
// @desc   UPDATE User
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                return res.status(500).json(error)
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })

            res.status(200).json('Account is updated')
        } catch (error) {
            return res.status(500).json(error)
        }

    } else {
        return res.status(401).json({ msg: 'You can only update your account' })
    }
})

// @method DELETE '/api/users/:id'
// @desc   DELETE User
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User Deleted')
        } catch (error) {
            return res.status(500).json({ msg: 'Server Error' })
        }
    } else {
        res.status(401).json({ msg: 'You can only delete your account.' })
    }
})

// @method GET 'api/users/:id'
// @desc   GET a user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, updatedAt, ...other } = user._doc

        if (!user) {
            return res.status(401).json({ msg: 'User Not Found' })
        }

        res.status(200).json(other)
    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' })
    }
})

// @method
// @desc

module.exports = router