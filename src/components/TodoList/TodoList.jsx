import React from 'react'
import Todo from './Todo'


const TodoList = ({todos}) => {
  return (
    <>
        {
            todos.map((todo) =>{
                return <Todo 
                    key={todo.id}
                    id={todo.id} 
                    name={todo.name} 
                    done={todo.done}
                    />
            })
        }
    </>
  )
}

export default TodoList