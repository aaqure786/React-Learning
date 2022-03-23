import React, {useState} from 'react'

export default function TextUtils(props) {
    const handleOnchange = (event)=>
    {
        
        setText(event.target.value);
        
    }
    const ClearText = ()=>
    {
        
        setText('');
        
    }
    const handleUpValue = ()=>
    {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const LowerCaseText = ()=>
    {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const CopyText = ()=>
    {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const HandleExtraSpaces = ()=>
    {
       let newtext = text.split(/[  ]+/);
       setText(newtext.join(" "))
    }
    const [text, setText]= useState("Enter Your Text here");
  return (
    <div>
        
        <div className="mb-3">
            <h1 className={`text-${props.mode==='light'?'black':'white'}`}>{props.lablName}</h1>
            <div className="mb-3">
            
            <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'black':'white'}`} value={text} onChange={handleOnchange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpValue}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={LowerCaseText}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={CopyText}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="Analyzer">
            <p className={`text-${props.mode==='light'?'black':'white'}`}> You paragraph contain {text.split(" ").length} word and {text.length} characters</p>
            <h1 className={`text-${props.mode==='light'?'black':'white'}`}> Text Preview</h1>
            <p className={`text-${props.mode==='light'?'black':'white'}`}>{text}</p>
        </div>
    </div>
  )
}
