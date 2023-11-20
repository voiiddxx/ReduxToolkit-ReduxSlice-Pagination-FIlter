import React, { useState } from 'react'
import "./Createuser.css"

const Createuser = ({close}) => {
    const [Gender, setGender] = useState("");
    const [Domain, setDomain] = useState("");
    const [Available, setAvailable] = useState(null);
    
  return (
   <>
   <div onClick={close} className="create-close"></div>
   <div className="create-user-main">
    <h2>Create User</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div className="create-user-form">
        <input className='user-form' type="text" placeholder='First name' />
        <input className='user-form' type="text" placeholder='Last Name' />
        <input className='user-form' type="email" placeholder='Enter Your Email Address' />
        <div className="gender">
           {
            Gender==="Male" ? <div className="selected-gender-box">
                <p>Male</p>
            </div>:  <div onClick={()=>{
                setGender("Male")
            }} className="gender-box">
                <p>Male</p>
            </div>
           }
           {
            Gender==="Female" ? <div className="selected-gender-box">
                <p>Female</p>
            </div> : <div onClick={()=>{
                setGender("Female")
            }} className="gender-box">
                <p>Female</p>
            </div>
           }
        </div>

        <div className="dropdown">
        <select onChange={(e)=>{
            setDomain(e.target.value);
        }}>
          <option value="Finance">Finance</option>
          <option value="Management">Management</option>
          <option value="Tech">Tech</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
        </select>
        </div>
        <div className="dropdown">
        <select onChange={(e)=>{
            setAvailable(e.target.value);
        }}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        </div>

        <div onClick={()=>{
            document.querySelector(".image").click();
        }} className="select-image">
            <h3>Select Image</h3>
        </div>
        <input className='image' type="file" hidden />
    </div>

    <div className="submit-button">
        <h3>Create User</h3>
    </div>
   </div>
   </>
  )
}

export default Createuser
