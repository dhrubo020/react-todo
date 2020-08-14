import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Registry(){
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error , setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("");
    };

    console.log(registryData);
    useEffect(() =>{
        if(textInput.length > 10) setError(true);
        else setError(false);
    })

    const removeItem = (index) =>{
        let newData = [...registryData];
        newData.splice(index,1);
        setRegistryData(newData);
    }
    const editItem = (index) =>{
        if(error) return;
        let newData = [...registryData];
        newData[index] = textInput;
        setRegistryData(newData);
    }
    return(
        <div>
            <h1>Registry</h1>
            
            <form onSubmit={addItem}>
                <label>
                Text input:<br></br>
                <input type="text" value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error? <span style={{color:"red"}}>Error occurred!</span> : null}

            {
                registryData.map((item , index) =>{
                    return(
                        <li style={{"margin": "7px"}} key={index}>{item} <button onClick={()=>editItem(index)}>Update</button> <button onClick={()=>removeItem(index)}>Remove</button></li>
                    )
                })
            }
            <br></br>
            <Link to="/" >go to Home</Link>
        </div>
    )
}
export default Registry;