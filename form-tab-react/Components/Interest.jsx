import React from "react";


function Interest({data, setFormData}){
    const {interests} = data;
    console.log("interests", interests);

    const handleDataChange = (e,name)=>{
        setFormData((prevState)=>({
            ...prevState, interests : e.target.checked?[...prevState.interests,e.target.name]:prevState.interests.filter((i)=>i!=e.target.name)
        }))
    }
    
    console.log("interests", interests);
    

    return (
        <div>
            <label>
                <input type='checkbox' name="cricket" checked={interests.includes('cricket')}  onChange={handleDataChange}/>
                Cricket
            </label>
            <br />
            <label>
                <input type='checkbox' name="coding" checked={interests.includes('coding')} onChange={handleDataChange} />
                Coding
            </label>
        </div>
        
    )
}

export default Interest;