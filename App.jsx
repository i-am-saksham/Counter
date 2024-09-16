import { useState } from 'react'/*for hooks */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // useState hook has two oarameter. first is the variable name and second is the function name.

  let  [counter, setCounter] = useState(10)

    // let counter = 15;
    const addValue = () =>{
      // console.log("Clicked",counter);  
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
