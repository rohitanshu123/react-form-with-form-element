import {useState} from 'react';

const Form =()=>{

    const[name, setName] =  useState("");
    const[finalName, setFinalName] = useState("");

    const inputElement=(event)=>{
        setName(event.target.value)
    }


    const onSubmit=()=>{
        setFinalName(name);
    }

    



    return (
        <>
            <h1> hello : {finalName} </h1>
            <input type="text" placeholder='enter name' onChange={inputElement} value={name}></input>
            <button onClick={onSubmit}>click me</button>

        </>
    )
}

export default Form;