
import { useState } from 'react';
import Quick from './quick';
import './App.css';
import Result from './Result';

function App() {
  const[input,setInput] = useState(
    {Initial_Investment :10000,
    annual_investment : 1200,
    expectedReturn : 6,
    duration :10}
  );
  const inputIsValid = input.duration >= 1;
  function handleclick(inputid,newvalue){
    setInput(prevUserInput =>{
      return{
        ...prevUserInput,
[inputid] : +newvalue,
    };
    })
  }

  return (
    <div className="App">
      <Quick oncClicked ={handleclick} userInput={input}/>
      {!inputIsValid && <p className='center'>Please enter number greater than 0!</p>}
      {inputIsValid && <Result userInput={input}/>}
    </div>
  );
}

export default App;
