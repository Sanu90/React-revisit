import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [add,setAdd]=useState(0)
  return (
    <>
    
    <h1 style={{color:'green'}}>Counter</h1>
    <p>Counter Value is:--- <span style={{color:'red'}}>{add}</span></p>
    <button onClick={()=>setAdd(add+1)}>INC</button> <button onClick={()=>setAdd(add>0?add-1:0)}>DEC</button>
    </>
  )
}

export default App
