import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TodoInfos from './TodoInfos'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import TodoActions from './TodoActions';
import { createContext } from 'react';

export const todoContext = createContext();


const todoArr = [
    {
        id:1,
        name: 'Truc',
        done: true
    },
    {
        id:2,
        name: 'Machin',
        done: false
    },
    {
        id:3,
        name: 'Bidule',
        done: false
    }
]

const TodoListComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const stordeTodos = JSON.parse(localStorage.getItem('TODO'));
        if(stordeTodos) setTodos(stordeTodos);
    }, []);

    useEffect(()=>{
        localStorage.setItem('TODO', JSON.stringify(todos));
    }, [todos]);

    function majTodos(id){
        const newTodos = [...todos]; // Crée un clone de todod dans newTodos
        const todo = newTodos.find((todo)=> todo.id === id); // Renvoie l'élément du tableau todoArr correspondant à todo
        todo.done = !todo.done;
        setTodos(newTodos);
    }

    function addTodo(name){
        const newTodo = {id:uuidv4(), name: name, done:false};
        const newTodoList = [...todos ,newTodo];
        setTodos(newTodoList);
        console.log(newTodo);
        
    }

    function clearDone(){
        //  chercher les todos qui ont pour attribut done=false
        const unDoneTodos = todos.filter(todo => todo.done === false);
        setTodos(unDoneTodos);
    }

    function handleCheckAll(boolCheck){
        
        // comme todos est immutable il faut en faire une copie
        const allTodos = [...todos]; // allTodos est un clone de todos
        allTodos.map((todo)=>todo.done = boolCheck);
        setTodos(allTodos);
    }

  return (
    <>
    <TodoInfos todos={todos}/>
    <todoContext.Provider value={[majTodos]}>
        <TodoList todos={todos} />
    </todoContext.Provider>
    <div>
        <TodoForm addTodo={addTodo}/>
    </div>
    <div>
        <TodoActions clearDone={clearDone} handleCheckAll={handleCheckAll} />
    </div>
    </>
  )
}

export default TodoListComponent