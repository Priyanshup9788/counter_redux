import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ViewEmp = () => {

    
    const [allEmp,setAllEmp] = useState(()=>{
        let allEmp = useSelector((state)=>state.employee);
        return allEmp;

    });

    console.log(allEmp)

  return (
    <table border={1}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {
                allEmp.map((emp)=>(
                    <tr>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default ViewEmp