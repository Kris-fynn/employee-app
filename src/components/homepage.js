import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import "./homepage"
function Homepage() {
   const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
    return (
      <div className='home'>  <h1>Employee Details</h1>
      <button ><Link  to="/">Log out</Link></button>
      <div className='display'>
      {user.map((user,index)=>{
                          return(
                              <div  className='displayinfo'>
                                  <span> Image: <p><img src={user.image} className="imguser" /></p> </span>
                                  <span> Name: <p>{user.name}</p> </span>
                                  <span> Surname: <p>{user.surname}</p> </span>
                                  <span> Email: <p>{user.email}</p></span>
                                  <span> Contact number: <p>{user.contact}</p></span>
                                  <span> Time: <p> {user.date} </p></span>
                              </div>
                          )
                      })}
      </div>
      </div>
        );
     }
export default Homepage;