import React from "react";
import { Switch, Route } from "react-router-dom";
import AddModel from "./pages/model/addModel";
import DisplayModel from "./pages/model/displayModel";
import DisplayItem from "./pages/item/displayItem";
import { TableData } from "./pages/tableEditable/TableData";
import EditItemProvider from "./provider/EditItemProvider";
import CreateModelProvider from "./context/provider/createModelContext";
import AddItem from "./pages/item/addItemWithSN";
import CreateItemProvider from "./context/provider/createItemContext";
import AddItemWithoutSN from './pages/item/addItemWithoutSN'

const Routing: React.FC = props => {
  return (
    <Switch>
      <Route path="/model/add">
        <CreateModelProvider>
          <AddModel />
        </CreateModelProvider>
      </Route>

      <Route path="/item/add">
        <CreateItemProvider>
          <AddItem />
        </CreateItemProvider>
      </Route>

      <Route path="/model">
        <DisplayModel />
      </Route>

      <Route path="/add/item/nosn">
        <AddItemWithoutSN />
      </Route>

      <Route path="/item">
        <EditItemProvider>
          <TableData />
        </EditItemProvider>

        {/* <DisplayItem /> */}
      </Route>
    </Switch>
  );
};

export default Routing;
