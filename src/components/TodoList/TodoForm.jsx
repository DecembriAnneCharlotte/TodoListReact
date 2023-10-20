import React, { useRef } from 'react'

const TodoForm = ({addTodo}) => {

    const todoRef = useRef();

    function handleClick(){
        const name = todoRef.current.value;
        if(name === '') return;
        addTodo(name);
        todoRef.current.value = null;
;    }

  return (
    <>
        <input ref={todoRef} type='texte'/>
        <button onClick={handleClick}>Ajouter</button>
    </>
  )
}

export default TodoForm