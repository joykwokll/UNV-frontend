import React from "react";
// import { Button } from "react-bootstrap";
import Dropdown from "react-dropdown";
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
    </div>
  );
}

export default Services;
