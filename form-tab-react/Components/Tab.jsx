import React, { useState } from 'react';
import Interest from '../Components/Interest';
import Profiles from '../Components/Profiles';
import Settings from '../Components/Settings';
import '../src/App.css'

function Tab() {
    const [formData, setFormData] = useState({
         name: 'James',
         age: '23',
         email: 'james@yahoo.com',
         interests: [],
         theme: 'dark'
    })
    const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
        name: 'Profile',
        component: Profiles
    },
    {
        name: 'Interest',
        component: Interest
    },
    {
        name: 'Settings',
        component: Settings
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component;

 const handlePrev = ()=>{
    setActiveTab((prev)=>prev - 1);
    console.log('handling handlePrev');  
 } 

 const handleNext = ()=>{
    setActiveTab((prev)=>prev + 1);
    console.log('handling handleNext');  
 } 

 const submit = ()=>{
    console.log("handling submit");
    
 }

  return (
    <>
    <div className='heading-container'>
    {
        tabs.map((data,index)=>{
            console.log(data.name);
            return <div key={index} style={{color: index===activeTab?'Red':'Black'}} className='heading' onClick={()=>setActiveTab(index)}>{data.name}</div>   
        })
    }

    </div>
    <div className='tab-body'>
   <ActiveTabComponent data={formData} setFormData={setFormData}/>
    </div>
    <div>
        <br />
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab < tabs.length-1  && <button onClick={handleNext}>Next</button>}
        {activeTab === tabs.length-1 && <button onClick={submit}>Submit</button>}
    </div>
    </>
  )
}

export default Tab;