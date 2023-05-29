import { useState } from "react";

const Hooks = () =>{
    const [count, setCount]= useState(0);




    const IncreaseNumber = ()=> {
        setCount(count + 1);
        console.log("count is "+ count);

    }

    const DecreaseNumber = () =>{
     setCount(count - 1);
     console.log("count is "+ count)
    }




    return(
        <>
            <h1>Count is : {count} </h1>
            <button onClick={IncreaseNumber}> + </button>
            <button onClick={DecreaseNumber}> - </button>
        </>
    )


}

export default Hooks;