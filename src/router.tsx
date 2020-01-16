import React from "react";
import { Switch, Route } from "react-router-dom";
import AddModel from "./pages/model/addModel";
import DisplayModel from "./pages/model/displayModel";
import DisplayItem from "./pages/item/displayItem";
import CreateModelProvider from "./context/provider/createModelContext";
import AddItem from "./pages/item/addItemWithSN";
import CreateItemProvider from "./context/provider/createItemContext";
import AddItemWithoutSN from './pages/item/addItemWithoutSN'
import AddCustomer from "./pages/customer/add";
import TableData from "./pages/tableEditable/TableData"
import OverviewCustomerComponent from "./components/display-customer-component/overview-customer.component";

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

      <Route path="/add/item/noserial">
        <AddItemWithoutSN />
      </Route>

      <Route path="/item">
        <DisplayItem />
        
      </Route>

      <Route path="/customer">
          <AddCustomer />
      </Route>

      <Route path="/display/customer">
        <OverviewCustomerComponent />
      </Route>
    </Switch>
  );
};

export default Routing;
{/* <EditItemProvider>
          <TableData />
        </EditItemProvider> */}