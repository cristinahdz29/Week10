//creating a stepper using hooks in react

import React, { useState } from 'react'

function Stepper () {
    const [count, setCount] = useState(99)

    // function to decrement
    // setting function to a variable
    const handleDecrement = () => {
        setCount(count - 1)
    }

    // function to increment
    // setting function to a variable
    // count was already defined outside of this function, within the stepper function
    // which is how/why we can use it
    const handleIncrement = () => {
        setCount(count + 1)
    }
    


    return (
      <div>
        <button onClick={handleDecrement}>-</button>
        <label>{count}</label>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
}

export default Stepper