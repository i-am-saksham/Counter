import { useState } from 'react'/*for hooks */
import './App.css'

function App() {
  let  [counter, setCounter] = useState(10)

    const addValue = () =>{
      counter = counter + 1;
       
      
      setCounter(counter)
    }
    const removeValue = () =>{
      setCounter(counter -1)
    }

  return (
    <>
      <h1>React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
