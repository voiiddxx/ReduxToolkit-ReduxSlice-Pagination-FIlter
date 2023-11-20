import React, { useState } from 'react'
import "./Heroupper.css"
import axios from "axios"
import {getUser, onNextPage} from "../../store/slices/Userslice"
import {useDispatch , useSelector} from "react-redux"
const HeroUpper = () => {

  const [seatcQuery, setseatcQuery] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = async()=>{
    try {
      const response = await axios.get("https://heliverse-assignment-server.onrender.com/api/user/search?first_name="+seatcQuery+"&page=1");
      console.log("this is search qwwury data",response.data);
      dispatch(onNextPage(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="hero-upper">
        <h1>Get All The User Details At One Place Now</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate</p>
        <div className="search-section">
            <input onChange={(e)=>{
              setseatcQuery(e.target.value);
            }} className='search-input' type="search" placeholder='Seach With Name' />
            <input onClick={handleSubmit} className='search-button' type="submit" />
        </div>
    </div>
  )
}

export default HeroUpper
