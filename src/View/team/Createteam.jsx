import React, { useState } from 'react'
import "./Createteam.css"
import axios from "axios"
import {useDispatch , useSelector} from "react-redux"
const Createteam = ({close}) => {
  const [SearchedUser, setSearchedUser] = useState(null);
  
  const [TeamName, setTeamName] = useState("")
  const [TeamTagline, setTeamTagline] = useState("")
  const [seatcQuery, setseatcQuery] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.user);

  const HandleSubmit = async()=>{
    try {
      const response = await axios.get("https://heliverse-assignment-server.onrender.com/api/user/search?first_name="+seatcQuery+"&page=1");
      setSearchedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  let teamMember = [];


  const CreateTeam = async(teamMember)=>{
    try {
      const bodyParameter = {
        team_name:TeamName,
        team_tagline:TeamTagline,
        team_member:teamMember

      }
      const response = await axios.post("https://heliverse-assignment-server.onrender.com/api/team" , bodyParameter);
      close();
      alert("Team Added");
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
    
   <div onClick={close} className="create-close"></div>
   <div className="create-user-main">
    <h2>Create Team</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div className="create-user-form">
        <input onChange={(e)=>{
          setTeamName(e.target.value)
        }} className='user-form' type="text" placeholder='Enter Team Name' />
        <input onChange={(e)=>{
          setTeamTagline(e.target.value)
        }} className='user-form' type="text" placeholder='Team Tagline' />
        </div>
        <p>Search User for selection</p>
        <div className="search">
          <input onChange={(e)=>{
            setseatcQuery(e.target.value);
          }} className='search-input' type="text" placeholder='Search' />
          <input onClick={HandleSubmit} className='submit-button-search' type="submit" />
        </div>
        <div className="team-submit-button">
          <div className="extra">
            
           {
            SearchedUser!=null ?  SearchedUser.map((curr)=>{
              return <div onClick={()=>{
                alert("Added");
                teamMember.push(curr._id);
              }} className="user-card">
              <img src={curr.avatar} alt="girlimage" />
              <p>{curr.first_name}</p>
            </div>
            }) : <p>No User found</p>
           }
          </div>
          <div onClick={()=>{
            console.log(teamMember);
            CreateTeam(teamMember);
          }} className="button-team">
            <p>Create Now</p>
          </div>
        </div>

    
   </div>
    </>
  )
}

export default Createteam
