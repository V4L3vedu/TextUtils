import React, { useState } from 'react'

export default function Form(props) {
    const upper_case = ()=>{
        console.log("uppercase");
        setText(text.toUpperCase())
    }
    const lower_case = ()=>{
        console.log("lowercase");
        setText(text.toLowerCase())
    }
    const change = (event)=>{
        setText(event.target.value)
        setpre("Preview");   
    }

    const [text, setText] = useState("");
    const [text_, setpre] = useState("");


    return (
    <>
        <div className='mlr-4'>
            <h1>{props.heading}</h1>
        </div>
        <form>
            <div className="mb-3 mlr-4">
                <textarea className="form-control" placeholder="Enter the text" value={text} onChange={change} rows={10}></textarea>
                <label htmlFor="floatingTextarea">Enter text</label>
            </div>
            <hr className="border border-primary border-1 opacity-75 mlr-4"/>
            <h4 className='mlr-4 mb-3'><b>Convert to</b></h4>
            <div className="mlr-4" >
                <button type="button" className="btn btn-primary me-3" onClick={upper_case}>UpperCase</button>
                <button type="button" className="btn btn-primary me-3" onClick={lower_case}>LowerCase</button>
            </div>
        </form>
        <div className='mlr-4'>
            <hr className="border border-primary border-1 opacity-75 " />
            <h4><b>Details</b></h4>
            <p>{text.split(" ").length} words count, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Time to read</p>
        </div>
        <div className='mlr-4'>
            <hr className="border border-primary border-1 opacity-75 " />
            <h3>{text_}</h3>
            <p>{text}</p>
        </div>
    </>
    )
}
