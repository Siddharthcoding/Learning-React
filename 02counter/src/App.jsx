import { useState } from 'react'    // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // returns a variable and a method in an array
  // useState send updates in batches
  const [counter, setCounter] = useState(15)  // default value
  
  //let counter = 15

  const addValue = () => {
    // counter = counter + 1  
    // setCounter(counter)    // automatically updates value
    // if(counter < 20){
    //   setCounter(counter + 1)   // can do this too
    // }
    
    // a batch will be created of these and as these are same
    // so only it will run only once
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // when we pass like callback it will complete updation
    // after the completion of all these
    setCounter(prevCounter => prevCounter + 1)    // taking previous state
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
