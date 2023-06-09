import "./App.css";
import Home from "./components/Home"
import Chat from "./components/Chat"
import Login from "./components/Login"
import Register from "./components/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-custom">
     
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
