import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import RightSidebar from '../RightSidebar/RightSidebar'
import { Posts } from '../../dummyData'

function Feed() {
    return (
        <div className="Feed">
            <div className="FeedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed
