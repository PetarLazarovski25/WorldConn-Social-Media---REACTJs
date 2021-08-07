import React from 'react'

function FriendsProfilePage({ user }) {
    return (
        <>
            <div className="UserFriend">
                <img src={user.profilePicture} alt="" className="UserFriendImg" />
                <span className="UserFriendUsername">{user.username}</span>
            </div>
        </>
    )
}

export default FriendsProfilePage
