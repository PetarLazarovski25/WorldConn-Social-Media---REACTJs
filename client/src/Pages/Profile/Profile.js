import React from 'react'
import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import Feed from '../../Components/Feed/Feed'

function Profile() {
    return (
        <>
            <Topbar />
            <div className="Profile">
                <LeftSidebar />
                <div className="ProfileRight">
                    <div className="ProfileRightTop">
                        <div className="ProfileCover">
                            <img src="/assets/post/3.jpeg" alt="" className="ProfileCoverImg" />
                            <img src="/assets/person/3.jpeg" alt="" className="ProfileAvatarImg" />
                        </div>
                        <div className="ProfileInfo">
                            <h4 className="ProfileInfoName">Petar Lazarovski</h4>
                            <span className="ProfileInfoDescription">I'm ballin'</span>
                        </div>
                    </div>
                    <div className="ProfileRightBottom">
                        <Feed />
                        <RightSidebar profile />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Profile
