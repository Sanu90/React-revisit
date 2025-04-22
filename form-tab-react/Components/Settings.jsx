import React from "react";

function Settings ({data, setFormData}){
    const {theme}= data;

    const handleDataChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState, theme : e.target.name
        }))
    }


    return (
        <div>
            <label>
                <input type='radio' name="dark" checked={theme==='dark'} onChange={handleDataChange} />
                Dark
            </label>
            <br />
            <label>
                <input type='radio' name="light" checked={theme==='light'} onChange={handleDataChange} />
                Light
            </label>
        </div>
    )
}

export default Settings;