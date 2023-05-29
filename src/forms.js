import { useState } from "react";

const Form = () => {
    const [name, setName]= useState("");
    const [finalName, setFinalName]= useState("");
    
    const inputElement = (event)=> {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const onSubmit= ()=>{
        setFinalName(name)
    }

    return(
    <>
        <h2>hello : {finalName}</h2>
        <input type="text" placeholder="enter your name " on onChange={inputElement} value={name}>click here</input>
        <button onClick={onSubmit} >onclick</button>
    </>
    )
    
    
}

export default Form;


