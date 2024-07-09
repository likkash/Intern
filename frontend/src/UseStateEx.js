import { useState } from "react"

export const FirstHook=()=>
    {
        // const[user,setUser]=useState("")
        const[hello,setUser]=useState("")
        const print=()=>
        {
            alert(hello+'has added successfully')
        }
    
        const result=(temp)=>
        {
            setUser(temp.target.value)
        }
    
        return(
            <>
            <input type="text" placeholder="Enter your Name" name={hello} onChange={result}  />
            <button className="btn btn-outline-danger" onClick={print}>Click</button>
            </>
        )
    }