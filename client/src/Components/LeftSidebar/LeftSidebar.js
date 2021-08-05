import React from 'react'
import './LeftSidebar.css'
import { RssFeed, PlayCircleFilledOutlined, Bookmark, Group, HelpOutline, WorkOutline, Event } from '@material-ui/icons'

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
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/5.jpeg" />
                        <span className="LSidebarFriendName">Petar Lazarovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/2.jpeg" />
                        <span className="LSidebarFriendName">Jana Ristovska</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/3.jpeg" />
                        <span className="LSidebarFriendName">Aleksandar Lazarovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/7.jpeg" />
                        <span className="LSidebarFriendName">Talija Todorovska</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                    <li className="LSidebarFriend">
                        <img className="LSidebarFriendImg" src="/assets/person/6.jpeg" />
                        <span className="LSidebarFriendName">Andrej Ristovski</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSidebar
