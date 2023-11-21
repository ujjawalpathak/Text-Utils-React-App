import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const resetDefault = (e) => {
        e.target.value = "";
        setText(e.target.value);
    }

    const handleUppercaseClick = () => {
        console.log("UpperCase function");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowercaseClick = () => {
        console.log("Lowercase function");
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleClearTextClick = () => {
        console.log("ClearText function");
        let clearText = "";
        setText(clearText);
    }

    // const handleCopyText = () => {
    //     console.log("CopyText function");
    //     var copyText = document.getElementById("textBox");
    //     copyText.select();
    //     navigator.clipboard.writeText(copyText.value);
    // }

    const [text, setText] = useState("Enter your text here");
    return (
        <>
            <div className='container' style={{color: props.displayMode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label">{props.details}</label>
                    <textarea className="form-control" id="textBox" value={text} onFocus={resetDefault} onChange={handleOnChange} style={{backgroundColor: props.displayMode==='dark'?'grey':'white', color: props.displayMode==='dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUppercaseClick}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-2' onClick={handleLowercaseClick}>Convert to Lower Case</button>
                <button className='btn btn-primary mx-2' onClick={handleClearTextClick}>Clear Text</button>
                {/* <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy Text</button> */}
            </div>
            <div className='container my-3' style={{color: props.displayMode==='dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
