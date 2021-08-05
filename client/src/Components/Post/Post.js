import React from 'react'
import './Post.css'
import { MoreVert, ThumbUp, Favorite } from '@material-ui/icons'

function Post() {
    return (
        <div className="Post">
            <div className="PostWrapper">
                <div className="PostTop">
                    <div className="PostTopLeft">
                        <img src="/assets/person/3.jpeg" className="ProfileImage" />
                        <span className="PostProfileName">Petar Lazarovski </span>
                        <span className="PostDate">5 mins ago</span>
                    </div>
                    <div className="PostTopRight">
                        <MoreVert className="PostTopRIcon" />
                    </div>
                </div>
                <div className="PostData">
                    <p className="PostText">
                        Welcome to my Social Media.
                    </p>
                </div>
                <div className="PostImageWrapper">
                    <img src="/assets/post/1.jpeg" className="PostImage" />
                </div>
                <div className="PostBottom">
                    <div className="PostBottomLeft">
                        <img src="/assets/like.png" className="LikeIcon" />
                        <img src="/assets/heart.png" className="HeartIcon" />
                        <span className="PostLikes">35 people like this</span>
                    </div>
                    <div className="PostBottomRight">
                        <span className="PostComments">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
