import React from 'react'
import './RightSidebar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'
import FriendsProfilePage from '../FriendsProfilePage/FriendsProfilePage'

function RightSidebar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <div className="UserInformation">
                    <h4 className="HeaderText">User Information</h4>
                    <p className="UserInformationText"><strong>City: </strong>New York</p>
                    <p className="UserInformationText"><strong>From: </strong> Los Angeles</p>
                    <p className="UserInformationText"><strong>Relationship: </strong> Single</p>
                </div>
                <div className="UserFriendsList">
                    <h4 className="UserFriendsHeaderText">User Friends</h4>
                    <div className="UserFriends">
                        {Users.slice(0, 6).map(user => (
                            <FriendsProfilePage key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="RightSidebar">
            <div className="RightSidebarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default RightSidebar
