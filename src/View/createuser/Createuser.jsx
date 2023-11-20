import React, { useState } from 'react'
import "./Createuser.css"
import axios from "axios"

const Createuser = ({close}) => {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [Gender, setGender] = useState("");
    const [Domain, setDomain] = useState("");
    const [Available, setAvailable] = useState(null);
    const [email, setemail] = useState("");
    const [Image, setImage] = useState(null);
    

    const CreateUser = async (imageUrl)=>{
        try {
            const bodyParameter = {
                first_name:first_name,
                last_name:last_name,
                email:email,
                avatar:imageUrl,
                gender:Gender,
                domain:Domain,
                available:Available
            }
            const response = await axios.post("https://heliverse-assignment-server.onrender.com/api/users" , bodyParameter);
            close();
        } catch (error) {
            console.log(error);
        }
    }
    
    

    const handleSubmit = ()=>{
        alert("Please Wait");
        try {
            let formdata = new FormData();
            formdata.append("file" , Image[0]);
      formdata.append("upload_preset" , "qouutdij");
      axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
          onDownloadProgress:(ProgressEvent)=>{
            console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
          }
      }).then(response=>{
        console.log(response.data.url);
        console.log(first_name , last_name , email , Domain , Gender , Available);
        CreateUser(response.data.url);
    });
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
   <>
   <div onClick={close} className="create-close"></div>
   <div className="create-user-main">
    <h2>Create User</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div className="create-user-form">
        <input onChange={(e)=>{
            setfirst_name(e.target.value);
        }} className='user-form' type="text" placeholder='First name' />

        <input onChange={(e)=>{
            setlast_name(e.target.value)
        }} className='user-form' type="text" placeholder='Last Name' />


        <input onChange={(e)=>{
            setemail(e.target.value)
        }} className='user-form' type="email" placeholder='Enter Your Email Address' />

        
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
        <input onChange={(e)=>{
            setImage(e.target.files)
        }} className='image' type="file" hidden />
    </div>

    <div onClick={handleSubmit} className="submit-button">
        <h3>Create User</h3>
    </div>
   </div>
   </>
  )
}

export default Createuser
