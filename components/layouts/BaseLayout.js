import React from "react";
import Header from "../shared/Header.js";

const BaseLayout = props => {
  return (
    <React.Fragment>
      {" "}
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default BaseLayout;
