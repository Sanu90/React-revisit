import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Component1,AnotherComponentinComponent1, TestClass} from './component/component1'
import Component2 from './component/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3><TestClass/></h3>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Component1/>
      <Component2/>
      <AnotherComponentinComponent1/>
    </>
    
  )
}

export default App
