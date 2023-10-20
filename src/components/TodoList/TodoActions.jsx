import React from 'react'

const TodoActions = ({clearDone, handleCheckAll,unCheckAll}) => {
  return (

    <>
        <button onClick={clearDone}>Clear Donne</button>
        <button onClick={()=>handleCheckAll(true)}>Check All</button>
        <button onClick={()=>handleCheckAll(false)}>Uncheck All</button>
    </>

    )
}

export default TodoActions