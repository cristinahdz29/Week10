//using hooks

import React, { useState} from 'react'
import './Piechart.css'
import { PieChart } from 'react-minimal-pie-chart'
 
function App () {
  // setting the state for the bank account that will take in 3 different values
  // setting the state as an object because has several properties/values/fields
  // providing the state with intial percentages so the piechart has default values on load
  const [account, setAccount] = useState({
    saving: 50,
    checking: 25,
    brokerage: 25
  })

  // defining handleChange function;
  // Will be called when user types value into text boxes
  const handleChange = (e) => {
      setAccount({
        ...account,
        [e.target.name]: e.target.value
      })
  }
  



  return (
    <div>
      <h1>Bank Account Graph</h1>
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
      <div className="piechart">
        <PieChart
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`} // creates a label for each segment, with value and % sign
          data={[
            {
              title: "Savings",
              // setting the value of each segment of piechart to the values saved to the state, 
              // wrapped in number to parse as an integer
              value: Number(account.saving),
              color: "#E38627",
            },
            {
              title: "Checking",
              value: Number(account.checking),
              color: "#C13C37",
            },
            {
              title: "Brokerage",
              value: Number(account.brokerage),
              color: "#6A2135",
            },
          ]}
        />
      </div>
    </div>
  );
}


export default App;
