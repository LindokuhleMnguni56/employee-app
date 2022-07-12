import React from "react";


function ListEmployee({employees, updateEmployees, deleteEmployee}){
    return(

        <div className="displaying">
            <h1>Display Employee</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Last Name </th>
                        <th>Email Address </th>
                        <th>Action </th>
                    </tr> 
                </thead>


                <tbody>
                    {
                        employees.map((employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastName}</td> 
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={()=>updateEmployees(employee.id)}>edit</button>
                                    <button onClick={()=>deleteEmployee(employee.id)}>delete</button>
                                </td>
                            </tr>
                        )
                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}

export default ListEmployee;