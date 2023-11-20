import React, { useEffect, useState } from 'react'
import "./User.css"
import Filter from '../Filter/Filter';
import {getUser} from "../../store/slices/Userslice"
import {useDispatch , useSelector} from "react-redux"

import axios from "axios"
const User = () => {
    const data = useSelector((state)=> state.user)
   console.log(data[0]);
    

    const dispatch = useDispatch();
    const [pageNo, setpageNo] = useState(1);
    


    const FetchUser = async()=>{
        try {
          const response = await axios.get("https://heliverse-assignment-server.onrender.com/api/user?page="+pageNo);
          console.log(response.data);
          dispatch(getUser(response.data));
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        FetchUser();
      } , [])
    

  

  return (
    <div className="user-section">
        <div className="user-heading">
            <h2>Checkout All Users</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <Filter/>
       
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
            }) : <h1>Data Loadin Please wait</h1>
          }
        </div>
        <div className="user-bottom">
            <div className="page">
                <div onClick={()=>{
                    setpageNo(pageNo+1);
                }} className="decrement">
                    <h1>+</h1>
                </div>
                <div className="page_no">
                    <h2>{pageNo}</h2>
                </div>
                <div onClick={()=>{
                    if(pageNo>1){
                        setpageNo(pageNo-1);
                    }
                }} className="increment">
                    <h2>-</h2>
                </div>
                
            </div>
            <div className="filter">
                <p>Filter</p>
            </div>
        </div>
    </div>
  )
}

export default User
