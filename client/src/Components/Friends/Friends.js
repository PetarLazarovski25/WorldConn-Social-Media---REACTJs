import React from 'react'

function Friends({ user }) {
    return (
        <li className="LSidebarFriend">
            <img className="LSidebarFriendImg" src={user.profilePicture} alt="" />
            <span className="LSidebarFriendName">{user.username}</span>
        </li>
    )
}

export default Friends
