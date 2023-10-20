import React, { useContext } from 'react'
import {todoContext} from './TodoListComponent'


const Todo = ({name, done, id}) => {

  const [majTodos] = useContext(todoContext);

    function handleChange(id){
        console.log("change", id);
        majTodos(id);
    }
  return (
    <div>
        <input type="checkbox" checked={done} onChange={() =>handleChange(id)}/>
        {name}
    </div>
  )
}

export default Todo