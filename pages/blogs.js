import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout.js";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BaseLayout>
        <h1>My Blog page</h1>
      </BaseLayout>
    );
  }
}

export default Blog;
