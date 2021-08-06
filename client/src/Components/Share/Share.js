import React from 'react'
import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

function Share() {
    return (
        <div className="Share">
            <div className="ShareWrapper">
                <div className="ShareTop">
                    <img src="/assets/person/3.jpeg" className="ProfilePicture" alt="" />
                    <input className="ShareInput" placeholder="What's in your mind?" />
                </div>
                <hr className="ShareLine" />
                <div className="ShareBottom">
                    <div className="ShareOptions">
                        <div className="ShareOption">
                            <PermMedia htmlColor="tomato" className="ShareIcon" />
                            <span className="ShareOptionItem">Photo or Video</span>
                        </div>
                        <div className="ShareOption">
                            <Label htmlColor="blue" className="ShareIcon" />
                            <span className="ShareOptionItem">Tag</span>
                        </div>
                        <div className="ShareOption">
                            <Room htmlColor="green" className="ShareIcon" />
                            <span className="ShareOptionItem">Location</span>
                        </div>
                        <div className="ShareOption">
                            <EmojiEmotions htmlColor="gold" className="ShareIcon" />
                            <span className="ShareOptionItem">Feelings</span>
                        </div>
                    </div>
                    <button className="ShareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
