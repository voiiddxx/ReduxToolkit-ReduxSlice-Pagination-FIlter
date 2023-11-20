import React, { useState } from 'react'
import "./Uppernav.css"
import Createuser from '../../View/createuser/Createuser';
import Createteam from '../../View/team/Createteam';
const Upernav = () => {

    const [createUser, setcreateUser] = useState(false);
    const [CreateTeam, setCreateTeam] = useState(false);
    const closeCreateUserModal = ()=>{
        setcreateUser(false);
    }
    const closeCreateTeam = ()=>{
        setCreateTeam(false);
    }
    
    
    if(createUser===true){
        return <Createuser close={closeCreateUserModal}/>
    }
    if(CreateTeam===true){
        return <Createteam close={closeCreateTeam}/>
    }
    return (
        <div className="upper-nav">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/d-letter-modern-logo-design-template_630263-2.jpg?w=360" alt="logo" />
            </div>
            <div className="menu">
                <div onClick={(()=>{
                    setCreateTeam(true);
                })} className="create-team">
                    <p>Create Team</p>
                </div>
                <div onClick={(()=>{
                    setcreateUser(true);
                })} className="create-user">
                    <p>Create User</p>
                </div>
            </div>
        </div>
        
      )
}

export default Upernav
