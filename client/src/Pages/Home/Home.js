import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import Feed from '../../Components/Feed/Feed'
import './Home.css'

function Home() {
    return (
        <>
            <Topbar />
            <div className="HomeContainer">
                <LeftSidebar />
                <Feed />
                <RightSidebar />
            </div>

        </>
    )
}

export default Home
