import React, { useState } from "react";
import { Link } from "react-router-dom";

const Employees = (props) => (
    props.employees.map((e, i) => (
        <tr key={i}>
            <td>
                {e.empId}
            </td>
            <td>
                {e.empName}
            </td>
            <td>
                <Link to={{
                    pathname: `/dept/${e.deptId}`
                }}>
                    {e.deptId}
                </Link>
            </td>
        </tr>
    )
    )
)

function Employee() {
    const [employees] = useState(
        [
            {
                empId: 1,
                empName: "Dharma",
                deptId: 1
            },
            {
                empId: 2,
                empName: "Keerthi",
                deptId: 2
            }
        ]
    )
    return (
        <div className="container">
            <h4>Employees Information!</h4>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            EmpId
                     </th>
                        <th>
                            EmpName
                     </th>
                    </tr>

                </thead>

                <tbody>
                    <Employees employees={employees}></Employees>
                </tbody>
            </table>
        </div>
    )
}

export default Employee;