import React, { useEffect, useState } from 'react'
import "./User.css"
import {getUser, onNextPage} from "../../store/slices/Userslice"
import {useDispatch , useSelector} from "react-redux"
import "../Filter/Filter.css"

import axios from "axios"
const User = () => {
        const data = useSelector((state)=> state.user);
        const [ViewFilterOption, setViewFilterOption] = useState(false);
        const dispatch = useDispatch();
        const [pageNo, setpageNo] = useState(1);
        const [domain, setdomain] = useState("");
        const [gender, setgender] = useState("");
        const [available, setavailable] = useState("");
        


        const fetchPaginationUser = async(pageNo , domain , gender , available)=>{
        try {
            const response = await axios.get("https://heliverse-assignment-server.onrender.com/api/users/?page="+pageNo+"&domain="+domain+"&gender="+gender+"&available="+available);
            console.log(response.data);
            dispatch(onNextPage(response.data));
        } catch (error) {
            console.log(error);
        }
      }
     useEffect(()=>{
            fetchPaginationUser(1 , domain , gender , available);
        } , []);


       const handleSubmit =(domain , gender , available)=>{
        fetchPaginationUser(1 , domain , gender , available);
            console.log(domain , gender , available);
        }
    
  


  return (
    <div className="user-section">
        <div className="user-heading">
            <h2>Checkout All Users</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
<div className="filter-container">
    
    {
        ViewFilterOption===true ? <div className="filter-modal">
            <h3>Choose filter option</h3>
            <p className='gender'>Geneder</p>

            <div className="gender-boxes">
                <div onClick={()=>{
                    setgender("Male")
                }} className="male-box">
                    <p>Male</p>
                </div>
                <div onClick={()=>{
                    setgender("Female");
                }} className="female-box">
                    <p>Female</p>
                </div>
            </div>
            <p className='gender'>Domain</p>
              
                <div className="gender-boxes">
                    <div onClick={()=>{
                        setdomain("IT")
                    }} className="it">
                        <p>IT</p>
                    </div>
                    <div onClick={()=>{
                        setdomain("Management")
                    }} className="management">
                        <p>Management</p>
                    </div>
                    <div onClick={()=>{
                        setdomain("Finance")
                    }} className="finance">
                        <p>Finance</p>
                    </div>
                    <div onClick={()=>{
                        setdomain("Sales")
                    }} className="sales">
                        <p>Sales</p>
                    </div>
                </div>
            <p className='gender'>Availability</p>
              
                <div className="gender-boxes">
                    <div onClick={()=>{
                        setavailable(true);
                    }} className="it">
                        <p>Available</p>
                    </div>
                    <div onClick={()=>{
                        setavailable(false)
                    }} className="management">
                        <p>Unavailable</p>
                    </div>
                    
                </div>

                {
                    gender!=""? <p>{gender}</p> :  <p></p>
                }
                {
                    domain!=""? <p>{domain}</p> :  <p></p>
                }
                {
                    available===true? <p>Available</p> :  <p></p>
                }
                {
                    available===false ? <p>Unavailabe</p> :  <p></p>
                }

               <div className="filter-buttons">
               <div onClick={()=>{
                setViewFilterOption(false)
                handleSubmit(domain , gender , available);
               }} className="filter-submit-button">
                    <p>Submit</p>
                </div>
               <div onClick={()=>{
                setViewFilterOption(false)
               }} className="filter-submit-button-close">
                    <p>Close</p>
                </div>
               </div>
            
        </div> :<div onClick={()=>{
            setViewFilterOption(true);
        }} className="filter-button">
                    <p>Filter</p>
                </div>
    }

</div>
       
        <div className="user-table">
          {
            data[0] ? data[0].map((curr)=>{
                return <div className="row">
                <img src={curr.avatar} alt="thisisimageofperson" />
                <h2>{curr.first_name}</h2>
                <p>{curr.domain}</p>
                <p>Female</p>
                <p>{curr.available}</p>
            </div>
            }) : <p>Loadin Please Wait</p>
          }
        </div>
        <div className="user-bottom">
            <div className="page">
            <div onClick={()=>{
                    if(pageNo>1){
                        setpageNo(pageNo-1);
                    }
                    fetchPaginationUser(pageNo-1 , domain , gender , available);
                }} className="increment">
                    <h3>-</h3>
                </div>
                
                <div className="page_no">
                    <h3>{pageNo}</h3>
                </div>
                <div onClick={()=>{
                    setpageNo(pageNo+1);

                    fetchPaginationUser(pageNo+1 , domain , gender , available);
                }} className="decrement">
                    <h3>+</h3>
                </div>
               
                
            </div>
        
        </div>
    </div>
  )
}

export default User
