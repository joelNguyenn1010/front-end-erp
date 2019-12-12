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
                
            </Route>
        </Switch>
    )
}

export default Routing