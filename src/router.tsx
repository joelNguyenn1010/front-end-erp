import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import AddModel from "./pages/model/addModel";
import DisplayModel from "./pages/model/displayModel"
import DisplayItem from './pages/item/displayItem'
import { TableData } from "./pages/table/TableData";
import EditItemProvider from "./provider/EditItemProvider";

const Routing: React.FC = props => {
    return (
        <Switch>
            <Route path="/model/add">
                <AddModel />
            </Route>

            <Route path="/model">
                <DisplayModel />
            </Route>

            <Route path="/item">
                <EditItemProvider>
                <TableData />
                </EditItemProvider>

                {/* <DisplayItem /> */}
    
            </Route>
        </Switch>
    )
}

export default Routing