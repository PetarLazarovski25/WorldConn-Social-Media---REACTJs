import React from 'react'

function Online({ user }) {
    return (
        <li className="Friend">
            <div className="ProfileImgContainer">
                <img src={user.profilePicture} className="ProfileImage" alt="" />
                <span className="ProfileOnline"></span>
            </div>
            <span className="RightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online
