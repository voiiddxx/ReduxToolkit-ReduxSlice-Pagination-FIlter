import React, { useState } from 'react'
import "./User.css"
const User = () => {
    const [pageNo, setpageNo] = useState(1);
    

  return (
    <div className="user-section">
        <div className="user-heading">
            <h2>Checkout All Users</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="user-table">
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
            <div className="row">
                <img src="https://www.shutterstock.com/image-photo/young-mixed-race-woman-isolated-260nw-1960001155.jpg" alt="thisisimageofperson" />
                <h2>Alex carry</h2>
                <p>Finance</p>
                <p>Female</p>
                <p>Available</p>
            </div>
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
