import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import AddModel from "./pages/model/addModel";

const Routing: React.FC = props => {
    return (
        <Switch>
            <Route path="/model/add">
                <AddModel />
            </Route>

            <Route path="/model">
                <h1>Model</h1>
            </Route>
        </Switch>
    )
}

export default Routing