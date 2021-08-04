import React from 'react'
import './Topbar.css'
import { Person, Search, Chat, Notifications } from '@material-ui/icons'

function Topbar() {
    return (
        <div className="TopbarContainer">
            <div className="TopbarLeft">
                <span className="logo">WorldConn</span>
            </div>
            <div className="TopbarCenter">
                <div className="Searchbar">
                    <Search className="searchIcon" />
                    <input type="text" placeholder="Search friends, posts or videos..." className="searchInput" />
                </div>
            </div>
            <div className="TopbarRight">
                <div className="TopbarLinks">
                    <span className="TopbarLink">Home</span>
                    <span className="TopbarLink">Timeline</span>
                </div>
                <div className="TopbarIcons">
                    <div className="TopbarIcon">
                        <Person />
                        <span className="TopbarIconBadge">1</span>
                    </div>
                    <div className="TopbarIcon">
                        <Chat />
                        <span className="TopbarIconBadge">1</span>
                    </div>
                    <div className="TopbarIcon">
                        <Notifications />
                        <span className="TopbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/3.jpeg" className="TopbarImage" />
            </div>
        </div>
    )
}

export default Topbar
