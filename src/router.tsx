import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import AddModel from "./pages/model/addModel";
import CreateModelProvider from "./context/provider/createModelContext";
import AddItem from "./pages/item/addItem";

const Routing: React.FC = props => {
    return (
        <Switch>

            <Route path="/model/add">
                <CreateModelProvider>
                    <AddModel />
                </CreateModelProvider>
            </Route>


            <Route path="/item/add">
            
                    <AddItem />
      
            </Route>


            <Route path="/model">
                <h1>Model</h1>
            </Route>
        </Switch>
    )
}

export default Routing