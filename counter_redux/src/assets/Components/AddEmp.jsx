import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEmp } from '../../redux/action';

const AddEmp = () => {

    let dispatch = useDispatch()

    const [newEmp, setNewEmp] = useState({});
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!newEmp.name || !newEmp.email)
        {
            alert("fill all the filed");
            return;
        }

        dispatch(addEmp(newEmp));
        setNewEmp({})

    }

    const onInputChange = (e)=>{
        setNewEmp({...newEmp , [e.target.name]:e.target.value})
    }

    return (
        <form onSubmit={(e) => onFormSubmit(e)} method="post">
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' onChange={(e)=>onInputChange(e)} value={newEmp.name ? newEmp.name : ""} />
            <br></br>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' onChange={(e)=>onInputChange(e)} value={newEmp.email ? newEmp.email : ""} />
            <br />
            <input type='submit' value="Add"  ></input>
        </form>
    )
}

export default AddEmp