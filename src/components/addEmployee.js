import React from "react";
import '../css/add.css'


function AddEmployee({setName, setSurname, setEmail, addEmployee}){
    return(

        <div className="form">
         
                <h1>Add Employee</h1>
                <div className="control">
                    <label htmlFor="name">Name: </label><br/>
                    <input placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="control">
                    <label htmlFor="surname">Last Name</label><br/>
                    <input placeholder="Enter surname" onChange={(e)=>setSurname(e.target.value)} />
                </div>

                <div className="control">
                    <label htmlFor="email">Email</label><br/>
                    <input placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <button onClick={addEmployee
                }>Add Employee</button>
         <br></br>
        </div>

    )
}

export default AddEmployee;