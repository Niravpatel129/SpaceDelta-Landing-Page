import React, { Component } from "react";
import Link from "next/link";
import "../../styles/main.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <h1>{title}</h1>
        {this.props.children}
        <Link href="/">
          <a style={{ fontSize: "20px" }}> Home </a>
        </Link>
        <Link href="/blogs">
          <a> Blogs </a>
        </Link>
        <Link href="/portfolios">
          <a> Portfolios </a>
        </Link>
        <Link href="/cv">
          <a> CV </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
