const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

// @method POST
// @desc   Create Post
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body)

        await newPost.save()

        res.status(200).json(newPost)
    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' })
    }
})

// @method PUT
// @desc   Update Post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })

            res.status(200).json({ msg: 'Post Updated' })
            res.send(post)

        } else {
            return res.status(403).json({ msg: 'You can update only your posts' })
        }


    } catch (error) {
        return res.status(500).json({ msg: 'Server ERROR' })
    }
})

// @method DELETE
// @desc   Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(403).json({ msg: 'No such post found' })
        }

        if (req.body.userId === post.userId) {
            await post.deleteOne()
            res.status(200).json({ msg: 'Post Deleted' })
        }

    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' })
    }
})

// @method PUT
// @desc   Like and Dislike Post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })

            res.status(200).json({ msg: 'Post has been Liked' })

        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })

            res.status(200).json({ msg: 'Post has been disliked' })
        }

    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' })
    }
})

// @method GET
// @desc   Get Post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(403).json({ msg: 'Post not found' })
        }

        res.status(200).json(post)

    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' })
    }
})

// @method GET
// @desc   Get timeline posts
router.get('/timeline/all', async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId)

        const userPosts = await Post.find({ userId: currentUser._id })

        const friendPosts = await Promise.all(
            currentUser.following.map(friendId => {
                return Post.find({ userId: friendId })
            })
        )

        res.json(userPosts.concat(...friendPosts))

    } catch (error) {
        res.status(500).json({ msg: 'SErver error' })
    }

})


module.exports = router