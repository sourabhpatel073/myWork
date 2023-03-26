import { toggleTodo } from "./api"
import { Todo } from "./constants"

interface TodoItemProps extends Todo {
update:()=>void
}
export const Todoitem=({title,status,id,update}:TodoItemProps)=>{

    const handleToggle=()=>{
     toggleTodo(id,status)
     update()
    }
 return <div>
    <h3>{title}--{status?"yes":"no"}</h3>
    <button onClick={handleToggle}>toggle</button>
 </div>
}