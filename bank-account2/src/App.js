import React, { useState } from 'react'
import Budget from './Components/Budget'
import Graph from './Components/Graph'
// App component is the parent component
// Will have 2 children components: Budget, Graph
function App () {
  // setting a global state
  // the values can be passed down to children components
  const [account, setAccount] = useState({
    saving: 50,
    checking: 25,
    brokerage: 25,
  });

  const handleChange = (account) => {
    setAccount(account)
  }



  return (
    <div>
      <Budget  handleChange = {handleChange}/>
      <Graph account = {account} />
    </div>
  );
}

export default App;
