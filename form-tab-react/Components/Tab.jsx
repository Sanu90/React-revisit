import React, { useState } from 'react';
import Interest from '../Components/Interest';
import Profiles from '../Components/Profiles';
import Settings from '../Components/Settings';
import '../src/App.css'

function Tab() {
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
  return (
    <>
    <div className='heading-container'>
    {
        tabs.map((data,index)=>{
            console.log(data.name);
            return <div key={index} className='heading' onClick={()=>setActiveTab(index)}>{data.name}</div>   
        })
    }

    </div>
    <div className='tab-body'>
   <ActiveTabComponent/>
    </div>
    </>
  )
}

export default Tab;