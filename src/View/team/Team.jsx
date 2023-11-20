import React, { useEffect } from 'react'
import  "./Team.css"
import { Code2 , DatabaseZap } from 'lucide-react';
import axios from "axios"

import {GetTeam} from "../../store/slices/Teamslice"
import {useDispatch , useSelector} from "react-redux"
const Team = () => {

const dispatch = useDispatch();
const data = useSelector((state)=> state.team);
console.log("This is team data" , data);
  const GetTeamData = async ()=>{
    try {
      const response = await axios.get("https://heliverse-assignment-server.onrender.com/api/team");
      console.log(response.data);
      dispatch(GetTeam(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    GetTeamData();
  }, [])
  return (
    <div className="team-section">
        <div className="team-heading">
            <h2>Teams</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero.</p>
        </div>

        <div className="team-card-section">
         {
          data[0] ? data[0].map((curr)=>{
            return  <div className="team-card">
            <div className="team-text">
            <Code2 color="#000000" />
            <h1>{curr.team_name}</h1>
            <p>{curr.team_tagline}</p>
            <div className="member">
            <DatabaseZap className='icon' color="#ff5c5c" size={15}/>
              <p>{curr.team_member.length} Members</p>
            </div>
            <div className="team-bottom">
              <div className="team-button-text">
                <p>Explore</p>
              </div>
            </div>
            </div>
          </div>
          }) : <p>Teams Are Loading Please Wait</p>
         }
          
          
          
        
          

        </div>
    </div>
  )
}

export default Team

