import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Registry(){
    const [registryData, setRegistryData] = useState([]);
    const [textInput,setTextInput] = useState("");
    const [error, setError] = useState(false);

    const addItem = (e) => {
        //console.log("click")
        e.preventDefault();
        //console.log("hi")        
        //alert("hi")
        const tempData=[...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("");
        console.log(registryData)
    }

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if (error) return;
        let newData = [...registryData]
        newData[index] = textInput;
        setRegistryData(newData)
        setTextInput("");
    }

    useEffect(() => {
        if (textInput.length>10) setError(true);
        else setError(false)
    },[textInput])

    /*
    const clog = (e) => {
        e.preventDefault();
        console.log("click");
    }
    */
    console.log(registryData);


    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go to Home</Link>
            <form onSubmit={ addItem }>
                <input type="text" value={textInput} onChange={(e)=>setTextInput(e.target.value)} />
                <input type="button" value="Submit" />
                <button onClick={addItem}>Add</button>
            </form>
            {error? <span style={{color: "red"}}>Error occurred.</span> : null} 
            {
                registryData.map((item,index)=>{
                    return (
                    <li key={index}>{index}:{item}<button onClick={()=>{removeItem(index)}}>Delete</button><button onClick={()=>{editItem(index)}}>Edit</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registry;