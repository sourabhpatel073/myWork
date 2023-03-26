import React, { useEffect, useState } from "react"
import { getTodos } from "./api"
import { Todo } from "./constants"
import { TodoInput } from "./TodoInput"
import { Todoitem } from "./TodoItem"

export const TodoApp=()=>{
    const[update,setUpdate]=useState<boolean>(false)
    const[todos,setTodos]=useState<Todo[]>([])

    const onAdd=()=>{
        setUpdate((prev)=>!prev)
    }

    useEffect(()=>{
         getTodos().then((res)=>{
            setTodos(res)
         })
    },[update])
    return <div>
        <TodoInput update={onAdd}/>
        {todos.map((el)=>{
            return <Todoitem key={el.id} {...el} update={onAdd}/>
        })}
    </div>
}