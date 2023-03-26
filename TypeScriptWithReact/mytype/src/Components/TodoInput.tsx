import React, { useState } from "react"
import { postTodo } from "./api"

type TodoInputProp={
    update:()=>void   //React.Dispatch<React.SetStateAction<boolean>>
}
export const TodoInput=({update}:TodoInputProp)=>{
  const[title,setTitle]=useState<string>("")
  
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       // let name=e.target.name
         let value=e.target.value
         setTitle(value)
         console.log(title)
    }

    const handleSub=(e:React.FormEvent<HTMLFormElement>)=>{
           e.preventDefault()
                postTodo(title) 
                
                update()
                setTitle("")
    }  
    return <div>
       <form onSubmit={handleSub}>
        <input placeholder="title" type={"text"} name="title" onChange={handleChange} value={title}/>
    
        <button type="submit" >add todo</button>
       </form>
    </div>
}