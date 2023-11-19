import React from 'react'
import "./Home.css"
import HeroUpper from '../../components/Home/HeroUpper'
import Team from '../team/Team'
import User from '../../components/users/User'
const Home = () => {
  return (
   <>
   <div className="home-main">
   <div className="upper-home-hero">
    <HeroUpper/>
   </div>
   <div className="team">
    <Team/>
   </div>
   <div className="user">
    <User/>
   </div>
   </div>
   </>
  )
}

export default Home
