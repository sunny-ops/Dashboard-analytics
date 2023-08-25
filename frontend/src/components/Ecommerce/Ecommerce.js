import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Ecommerce(props) {
  return (
    <div style={{ color: "black", top: "200px", position: "relative" }}>
      Ecommerce
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Ecommerce;
