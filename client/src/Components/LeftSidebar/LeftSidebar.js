import React from 'react'
import './LeftSidebar.css'
import { RssFeed, PlayCircleFilledOutlined, Bookmark, Group, HelpOutline, WorkOutline, Event } from '@material-ui/icons'
import { Users } from '../../dummyData'
import Friends from '../Friends/Friends'

function LeftSidebar() {
    return (
        <div className="LeftSidebar">
            <div className="LSidebarWrapper">
                <ul className="LSidebarList">
                    <li className="LSidebarListItem">
                        <RssFeed className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <PlayCircleFilledOutlined className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <Bookmark className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <Group className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <HelpOutline className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Questions
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <WorkOutline className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="LSidebarListItem">
                        <Event className="LSidebarIcon" />
                        <span className="LSidebarListItemText">
                            Events
                        </span>
                    </li>
                </ul>
                <button className="LSidebarButton">Show More</button>
                <hr className="LSidebarLine" />
                <ul className="LSidebarFriendList">
                    {Users.map(user => (
                        <Friends key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LeftSidebar
