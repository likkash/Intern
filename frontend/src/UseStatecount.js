
import { useState } from "react";

export let UseState2=()=>
    {
        const[count,setCount]=useState(0)
    
        const counting1=()=>
        {
            setCount(count+10 );
        }
        const CountingZero=()=>
        {
            setCount(0);
        }
        return(
            <>
            <button onClick={counting1} onDoubleClick={CountingZero}>Single Click value is counted,double click value is null(zero)</button>
            <span style={{color:'red',backgroundColor:'white'}}>
                {count}
            </span>
            </>
        )
    }
