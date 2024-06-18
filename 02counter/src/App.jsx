import { useState } from 'react'    // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // returns a variable and a method in an array
  let [counter, setCounter] = useState(15)  // default value
  
  //let counter = 15

  const addValue = () => {
    // counter = counter + 1  
    // setCounter(counter)    // automatically updates value
    if(counter < 20){
      setCounter(counter + 1)   // can do this too
    }
    
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
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
