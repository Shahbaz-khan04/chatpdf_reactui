import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  async function handleLogin(e) {
    try{
    e.preventDefault();
  console.log(email,password)
    navigation("/");
    }catch(error){
      console.log(error);
            if(error.response.data){
              alert(error.response.data.msg)
            }
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(i) => setEmail(i.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="on"
            required
            onChange={(i) => setPassword(i.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
