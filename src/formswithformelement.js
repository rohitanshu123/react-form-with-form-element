import React from "react";
import {useState} from 'react';


const Form=()=>{

    const [fullInfo, setFullinfo] = useState({
        fname : "",
        lname : "",
       
    });
    
    const inputElement =(event) =>{
        console.log(event.target.value);

        const value = event.target.value;
        const name = event.target.name;

       setFullinfo((preValue)=>{
            console.log(preValue);

            if(name  == "fname")
            {
                return{
                    fname : value,
                    lName : preValue.lname
                  
                }


            }

            else if(name == "lname")
            {
                return{
                    fname : preValue.fname,
                    lname : value
                   

                }

            }
           


            






        })

    }

    const onSubmitting=(event)=>{
        event.preventDefault();
    }





    return(
        <>
        <form onSubmit={onSubmitting}>
        <h1>hello: {fullInfo.fname} </h1>
        <input type="text" name="fname" placeholder="enter name" onChange ={inputElement} />

        {/* <input type="text" name="lname" placeholder= "enter name" onChange ={inputElement}></input> */}
         
        <button type="submit">click me</button>
        </form>
        </>
    )
}
export default Form;