
import React from 'react'
import Component2 from './Component2'


const Component1 = ()=>{
return (<>
<h1>Hello, I am Component1...._/\_</h1>
<Component2/>
</>
)
}

const AnotherComponentinComponent1 = ()=>{
    return (
        <>
        <h3>This works... This is written as a seperate function in Component1</h3>
        <Component2/>
        </>
    )
}

class TestClass extends React.Component{
   render(){
    return <h1>Class Component </h1>;
   }
}

export {Component1,AnotherComponentinComponent1, TestClass};