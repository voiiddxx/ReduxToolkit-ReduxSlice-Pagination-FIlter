import React from 'react'
import "./Createteam.css"
const Createteam = ({close}) => {
  return (
    <>
    
   <div onClick={close} className="create-close"></div>
   <div className="create-user-main">
    <h2>Create Team</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div className="create-user-form">
        <input className='user-form' type="text" placeholder='Enter Team Name' />
        <input className='user-form' type="text" placeholder='Team Tagline' />
        </div>
        <p>Search User for selection</p>
        <div className="search">
          <input className='search-input' type="text" placeholder='Search' />
          <input className='submit-button-search' type="submit" />
        </div>
        <div className="team-submit-button">
          <div className="extra"></div>
          <div className="button-team">
            <p>Create Now</p>
          </div>
        </div>

    
   </div>
    </>
  )
}

export default Createteam
