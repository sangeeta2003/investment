
import { useState } from 'react';
import Quick from './quick';
import './App.css';

function App() {
  const[input,setInput] = useState(
    {Initial_Investment :10000,
    annual_investment : 1200,
    expectedReturn : 6,
    duration :10}
  );
  function handleclick(){
    setInput()
  }

  return (
    <div className="App">
      <Quick/>
    </div>
  );
}

export default App;
