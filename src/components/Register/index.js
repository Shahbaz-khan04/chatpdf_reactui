import React, {  useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fname,setFName] = useState("")
    const [lname,setLName] = useState("")
    const navigation = useNavigate();

    async function handleLogin(e){
      try{
        e.preventDefault()
     
          console.log(email,password,fname,lname)

          navigation("/login");
          }catch(error){
            console.log(error);
            if(error.response.data){
              alert(error.response.data.msg)
            }
            
          }
    }
  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleLogin}>
       
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" id="fname" required onChange={(i)=>setFName(i.target.value)}/>
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" id="lname"  required onChange={(i)=>setLName(i.target.value)}/>
        </div>
        <div className="form-group">
          <label >Email:</label>
          <input type="text" id="username" name="username" required onChange={(i)=>setEmail(i.target.value)}/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" id="password" name="password" autoComplete="on" required onChange={(i)=>setPassword(i.target.value)}/>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
