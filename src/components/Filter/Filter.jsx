import React, { useState } from 'react'
import "./Filter.css"
const Filter = () => {
    const [available, setavailable] = useState(false);
    const [Itdomain, setItdomain] = useState(null);
  return (
    <div className="filter-main">
        <div className="filter-box">
            {
                available===false ? <div onClick={()=>{
                    setavailable(true)
                }} className="box">
                <p>Available</p>
            </div>  : <div onClick={()=>{
                setavailable(false)
            }} className="selected-box-filter">Available</div>
            }
            {
                Itdomain===null ? <div onClick={()=>{
                    setItdomain("IT");
                }} className="box">
                <p>IT</p>
            </div>  : <div onClick={()=>{
                setItdomain(null)
            }} className="selected-box-filter">IT</div>
            }
            
        </div>
    </div>
  )
}

export default Filter
