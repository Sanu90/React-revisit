
import React from 'react'
import Component2 from './Component2'
import './Component1.css'


const Component1 = ()=>{
return (<>
<h1 id='C1h1'>Hello, I am Component1...._/\_</h1>
<Component2/>
</>
)
}

const AnotherComponentinComponent1 = ()=>{
    return (
        <>
        <h3 id='ACh3'>This works... This is written as a seperate function in Component1</h3>
        <Component2/>
        </>
    )
}

class TestClass extends React.Component{
   render(){
    return <h1 className='TCh1'>Class Component </h1>;
   }
}

export {Component1,AnotherComponentinComponent1, TestClass};