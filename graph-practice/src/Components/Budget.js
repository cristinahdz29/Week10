import React,  {useState, useEffect } from 'react'

function Budget (props) {

    //setting a state
    const [account, setAccount] = useState({
        savings: 50,
        checkings: 25,
        brokerage: 25
    })

    // will use useEffect, to pass on the values once the State (which is asynchronous) has already
    // been updated
    useEffect(() => {
        props.handleChange(account)
    }, [account])

    // declare handleChange function 
    // captures the values form each input box and sets it to the state
    const handleChange = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
        
    }

    return (
      <div>
        <h1>Budget Component</h1>
        <input
          type="text"
          placeholder="savings"
          name="savings"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="checkings"
          name="checkings"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="brokerage"
          name="brokerage"
          onChange={handleChange}
        />
      </div>
    );
}

export default Budget