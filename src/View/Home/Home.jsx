import React, { useEffect } from 'react'
import "./Home.css"
import HeroUpper from '../../components/Home/HeroUpper'
import Team from '../team/Team'
import User from '../../components/users/User'
import Upernav from '../../components/UpeerNav/Upernav'
import axios from "axios"
const Home = () => {

  const FetchUser = async()=>{
    try {
      const response = await axios.get("")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

  })
  return (
   <>
   <div className="user-nav-bar">
    <Upernav/>
   </div>
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
