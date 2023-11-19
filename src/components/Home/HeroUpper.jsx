import React from 'react'
import "./Heroupper.css"
const HeroUpper = () => {
  return (
    <div className="hero-upper">
        <h1>Get All The User Details At One Place Now</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate</p>
        <div className="search-section">
            <input className='search-input' type="search" placeholder='Seach With Name' />
            <input className='search-button' type="submit" />
        </div>
    </div>
  )
}

export default HeroUpper
