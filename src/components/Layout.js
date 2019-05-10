import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.children}
      </React.Fragment>
    );
  }
}
