import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1000)
  const [inputData, setInputData] = useState()

  return (
    <>
      <h2>This was an Cognizant Interview Question</h2>

      <span>Value is: {count}</span>
      <br /><br />
      <input type="number" onChange={(e)=>setInputData(Number(e.target.value))} placeholder='Enter number' />
      <br /><br />
      {/* <span>inputData is: {inputData}</span> */}
      
      <br />
      <button onClick={()=>setCount(count+inputData)}>Add</button> 
      <button onClick={()=>setCount(count-inputData)}>Sub</button>
    
    </>
  )
}

export default App
