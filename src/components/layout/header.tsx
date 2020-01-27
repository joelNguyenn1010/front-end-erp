import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

const HeaderLink: React.FC = () => {
  return (
    <>
      <Button>

        <Link to="/model">Model</Link>

      </Button>


      <Button>

        <Link to="/item">Item</Link>

      </Button>




      <Button>

        <Link to="/model/add">Add Model</Link>

      </Button>


      <Button>

        <Link to="/item/add">Add Item</Link>

      </Button>



      <Button>

        <Link to="/add/item/noserial">Add Item No SN</Link>

      </Button>

      <Button>

        <Link to="/supplier">Supplier</Link>

      </Button>
    </>
  );
};

export default HeaderLink;
