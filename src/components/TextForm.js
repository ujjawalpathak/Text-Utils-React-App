import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleUppercaseClick = () => {
        console.log("UpperCase function");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowercaseClick = () => {
        console.log("UpperCase function");
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const [text, setText] = useState("Enter your text here");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label">{props.details}</label>
                    <textarea className="form-control" id="textBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUppercaseClick}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-2' onClick={handleLowercaseClick}>Convert to Lower Case</button>
            </div>
            <div className='container my-3'>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
