// Will use hooks

import React, { useState } from 'react'
import Budget from './Components/Budget'
import Graph from './Components/Graph'

function App() {
  const [account, setAccount] = useState({
    savings: 50,
    checkings: 25,
    brokerage: 25
  })

  const handleChange = (account) => {
    setAccount(account)
  }
  return(
    <div>
      <h1>App Component</h1>
      <Budget handleChange={handleChange}/>
      <Graph account={account}/>
    </div>
  )
}

export default App;
