import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Employee from "../../employee/employee";
import Dept from '../../dept/dept';

function Header() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/employee">Employee</Link>
                            </li>
                            <li>
                                <Link to="/dept/:deptId">Dept</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/employee">
                            <Employee />
                        </Route>
                        <Route path="/dept/:deptId">
                            <Dept></Dept>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Header;