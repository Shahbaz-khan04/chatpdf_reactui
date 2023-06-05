import React from "react";
import { useNavigate } from "react-router-dom";

export default function Foot1() {
  const navigation = useNavigate();

  return (
    <>
  <button onClick={()=>{      
    navigation("/register");
}}>Sign in</button>
  <button onClick={()=>{
          navigation("/login");

  }}>Login in</button>
  </>
  
  );
}