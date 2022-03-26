
import './App.css';
import Navbar from './components.js/Navbar';
import NightMode from './components.js/NightMode';
import TextUtils from './components.js/TextUtils';
import Alert from './components.js/Alert';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function App() {
  const [alert , setAlert] = useState(null)

  const showAlert = (message, type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState("light")
  const togleMode =() =>{
    if (mode === 'light')
    {
      setMode("dark")
      document.body.style.backgroundColor = '#160432';
      showAlert("Dark mode is enabled", "success");
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    
    }
  }
  return (
    <>
    <Router>
      
    <Navbar SiteName = "Text Analyzer" Link1="Home" Link2="About Us" mode = {mode} toggleMode ={togleMode }/>
    <Alert alert = {alert} />
    
    <div className="container">
        <Routes>
        <Route path="/" element={<TextUtils showAlert = {showAlert}  lablName="Enter your Text" mode = {mode}/>} />
        <Route path="/about" element={<NightMode mode = {mode}/>} />
          
        </Routes> 
    
    </div>
    </Router>
    </>
    
  );
}

export default App;
