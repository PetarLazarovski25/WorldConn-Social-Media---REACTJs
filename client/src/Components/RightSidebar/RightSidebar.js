import React from 'react'
import './RightSidebar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'

function RightSidebar() {
    return (
        <div className="RightSidebar">
            <div className="RightSidebarWrapper">
                <div className="BirthdayContainer">
                    <img src="/assets/gift.png" className="BirthdayImg" alt="" />
                    <span className="BirthdayText"><strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today!</span>
                </div>
                <div className="RightSidebarAd">
                    <img className="AdImage" src="/assets/ad.png" alt="" />
                </div>
                <div className="RightSidebarFriends">
                    <div className="SectionTitle">
                        <h4 className="FriendsText">Online Friends</h4>
                    </div>
                    <ul className="FriendList">
                        {Users.map(user => (
                            <Online key={user.id} user={user} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
