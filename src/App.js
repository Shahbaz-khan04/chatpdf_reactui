// import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/CardComponent/Cards";
import InputFeild from "./components/InputComponent/InputFeild";
import Footer from "./components/Footer/Footer";

function App() {
  // const [name,setName] = useState("");

  // useEffect(()=>{

  //   let data = localStorage.getItem("username")
  //   console.log("--->",data)
  //   setName(data)
  // },[])

  //   function handleClick(){
  //     let inputValue = document.getElementById("input").value
  //     setName(inputValue);
  //     localStorage.setItem("username",inputValue)
  //   }
  return (
    <div className="App font-custom">
      <Header />
      <InputFeild />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
