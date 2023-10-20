import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import TodoListComponent from '../components/TodoList/TodoListComponent'



const TodoList = () => {
  return (
    <>
    <Navbar/>
    <h1>TodoList</h1>
    <TodoListComponent/>
    </>
  )
}

export default TodoList