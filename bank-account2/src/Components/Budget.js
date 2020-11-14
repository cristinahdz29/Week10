import React, { useEffect, useState } from "react";


function Budget(props) {

    //local state / private state
    const [account, setAccount] = useState ({
         saving: 50,
        checking: 25,
        brokerage: 25,
    })

    useEffect(() => {
        props.handleChange(account);
    }, [account])

    const handleChange = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        
        });
        
    }


  return (
    <div>
      <h1>Budget Component</h1>;
      <input
        type="text"
        placeholder="Savings Percentage"
        name="saving"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Checking Percentage"
        name="checking"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Brokerage Percentage"
        name="brokerage"
        onChange={handleChange}
      />
    </div>
  );
}

export default Budget;