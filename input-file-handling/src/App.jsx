import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input,setInput]=useState('')
  

  return (
    <>
      <h1>Input Field Handling</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

      <p>{input?input:"Please enter something"}</p>
      
    </>
  )
}

export default App
