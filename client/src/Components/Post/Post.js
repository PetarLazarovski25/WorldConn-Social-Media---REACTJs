import React, { useState } from 'react'
import './Post.css'
import { MoreVert, ThumbUp, Favorite } from '@material-ui/icons'
import { Users } from '../../dummyData'


function Post({ post }) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const toggleLike = (e) => {
        e.preventDefault()
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }


    return (
        <div className="Post">
            <div className="PostWrapper">
                <div className="PostTop">
                    <div className="PostTopLeft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} className="ProfileImage" alt="" />
                        <span className="PostProfileName">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="PostDate">{post.date}</span>
                    </div>
                    <div className="PostTopRight">
                        <MoreVert className="PostTopRIcon" />
                    </div>
                </div>
                <div className="PostData">
                    <p className="PostText">
                        {post?.desc}
                    </p>
                </div>
                <div className="PostImageWrapper">
                    <img src={post.photo} className="PostImage" alt="" />
                </div>
                <div className="PostBottom">
                    <div className="PostBottomLeft">
                        <img src="/assets/like.png" className="LikeIcon" onClick={e => toggleLike(e)} alt="" />
                        <img src="/assets/heart.png" className="HeartIcon" onClick={e => toggleLike(e)} alt="" />
                        <span className="PostLikes">{like} people like this</span>
                    </div>
                    <div className="PostBottomRight">
                        <span className="PostComments">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
