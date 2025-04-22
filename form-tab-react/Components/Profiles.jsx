import React, { useRef,useEffect } from "react";


const Profiles = ({data, setFormData}) => {
    const inputRef = useRef('');

    useEffect(()=>{
        inputRef.current.focus()
    },[])

        console.log("formData",data);
        
    const {name, age, email} = data;

    const handleDataChange = (e,item)=>{
        setFormData(prevState=>({
            ...prevState,
            [item]: e.target.value
        })
        )
    }

    return (
        <div>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" placeholder="Enter name" ref={inputRef} value={name} onChange={(e)=>handleDataChange(e,'name')}/>
                <br></br>
                <label htmlFor="">Age: </label>
                <input type='number' placeholder="Enter age" value={age} onChange={(e)=>handleDataChange(e,'age')}/>
                <br></br>
                <label htmlFor="">Email: </label>
                <input type='email' placeholder="Enter email" value={email} onChange={(e)=>handleDataChange(e,'email')}/>


            </div>



        </div>
    )
}

export default Profiles;