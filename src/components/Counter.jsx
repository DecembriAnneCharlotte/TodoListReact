import React, { useState } from 'react'

const start = 0;
export const Counter = () => {
    const [count, setCount] = useState(start);

    function clickLess(){
        setCount(count - 1)
        console.log(count)    
    }

    function clickMore(){
        setCount(count + 1)
        console.log(count)    
    }

  return (
    <>
        <button onClick={clickLess}>-</button>
        <div>{ count }</div>
        <div></div>
        <button onClick={clickMore}>+</button>
    </>
  )
}
