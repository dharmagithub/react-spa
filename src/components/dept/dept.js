import React, { useState } from "react";
import { useParams, useHistory } from "react-router";


function Dept() {

    const [depts] = useState(
        [
            {
                deptId: 1,
                deptName: "IT"
            },
            {
                deptId: 2,
                deptName: "Accounts"
            }
        ]
    );

    let { deptId } = useParams();

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    const deptInfo = depts.find(d => d.deptId == deptId);

    return (
        <div className="container">
            <div className="row">
                <h4>
                    {
                        deptId > 0 ? `Department ${deptId} Information` : 'Department Information'
                    }

                </h4>
            </div>
            {
                deptId > 0 && deptInfo != null && (
                    <div className="row">
                        <div className="col-md-6">
                            <label>DeptId : {deptInfo.deptId}</label>

                        </div>
                        <div className="col-md-6">
                            <label>DeptName : {deptInfo.deptName}</label>
                        </div>
                    </div>
                )
            }
            <div className="row">
                <button className="btn btn-primary" onClick={back}>Back</button>
            </div>
        </div>
    )
}

export default Dept;