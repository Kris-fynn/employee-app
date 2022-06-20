import React,{useState} from 'react';
import {Link} from 'react-router-dom'
function Singin () {
    const[ email, setEmail] =useState("");
    const[ password, setPassword] =useState("");
    const getData =(e)=>{
      e.preventDefault();
      // const getuserArr=JSON.stringify(localStorage.getItem("user"));
      // console.log( getuserArr);
      let logdetails={
        email:email,
        password:password
      }
      if(logdetails.email===""){
        alert("Enter Your Email")
      }else if(!logdetails.email.includes("@")){
        alert("Your Email is missing an @  in it")
      }else  if(logdetails.password===""){
      alert("Enter Your Password")
      }else if(logdetails.password.length<10){
      alert("Your Password Must Have 10 Characrters")
      }
      else {
        let storedUsers = JSON.parse(localStorage.getItem("user"));
        let userFound=false;
        for(let user of storedUsers) {
          if(email === user.email && password === user.password){
            alert("You have enter correct Email and password");
            userFound=true
            window.location = "/Homepage";
          }
         }
         if(!userFound){
          alert("You have enter wrong Email and password");
         }
      // if(email===getuserArr[email] && password===getuserArr[password]){
      //   alert("You have enter coorect Email and password");
      //   window.Location='/Home';
      // }
      // else if(getuserArr[email]==="" && getuserArr[password]===""){
      //   alert("Your email or password emp");
      // }
      // else{
      //   alert("Your email or password incorrect");
      //   window.Location="/Home";
      // }
      }
    return (
           <div><h1>Employee Singin</h1>
              <form role="form" onsubmit="signIn(event);" autocomplete="off">
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address" onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <div class="form-group">
                <input type="password" name="pwd" id="pwd" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <div class="form-group">
                <button className='btn'   onClick={getData}>Sign In</button>
            </div>
            <span><p>Don't have an account? <Link to="/registration" >Register here</Link></p>
        </span>
        </form>
           </div> 
           
        );
     }
    }
export default Singin;