import React from "react";
// import { Button } from "react-bootstrap";
import Dropdown from "react-dropdown";
// import Dropdown from "react-bootstrap/Dropdown"
import "react-dropdown/style.css";

const options = ["Anti Aging", "Pigmentation", "Sensetive Skin", "Pimple"];
const defaultOption = options[0];

function Services(props) {
  return (
    <div>
      <Dropdown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Services"
      />
      

      {/* <Dropdown.Menu show>
        <Dropdown.Header>Services</Dropdown.Header>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </Dropdown.Menu> */}
    </div>
  );
}

export default Services;
