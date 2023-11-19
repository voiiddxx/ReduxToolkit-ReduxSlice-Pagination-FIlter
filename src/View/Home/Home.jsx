import React from 'react'
import Sidenav from "../../components/Nav/Sidenav"

const Home = () => {
  return (
    <div className="home-main">
        <div className="home-left-sidebar">
            <Sidenav/>
        </div>
        <div className="home-mid-users-hero"></div>
        <div className="home-right"></div>
    </div>
  )
}

export default Home
