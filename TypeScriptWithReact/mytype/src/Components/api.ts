import axios from "axios"
import { Todo } from "./constants"


export const postTodo=async(title:string)=>{

    const newTodo:Todo={
        title,
        status:false
    }
   const res=await axios.post('http://localhost:8080/todos',newTodo)
}

export const getTodos=async()=>{
    const res=await axios.get('http://localhost:8080/todos')
  return res.data
}

export const toggleTodo=async(id:number|undefined,status:boolean)=>{
const res=await axios.patch(`http://localhost:8080/todos/${id}`,{status:!status})
}