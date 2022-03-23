
import './App.css';
import Navbar from './components.js/Navbar';
// import NightMode from './components.js/NightMode';
import TextUtils from './components.js/TextUtils';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light")
  const togleMode =() =>{
    if (mode === 'light')
    {
      setMode("dark")
      document.body.style.backgroundColor = '#160432';
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar SiteName = "TextUtils" Link1="Home" Link2="About Us" mode = {mode} toggleMode ={togleMode }/>
    <div className="container">
    <TextUtils lablName="Enter your Text" mode = {mode}/>
    {/* <NightMode/> */}
    </div>
    </>
    
  );
}

export default App;
