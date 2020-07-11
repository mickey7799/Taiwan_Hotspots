import React from "react";
import Form from "./Form";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h1>Taiwan Hotspots</h1>
      <Form history={props.history} handleSubmit={props.handleSubmit}/>
    </div>
  );
};

export default withRouter(Header);