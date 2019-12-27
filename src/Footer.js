import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="main-footer">
        <strong>
          Copyright © 2019-2020 <a href="http://www.oceanos-ntua.gr">Oceanos</a>
          .
        </strong>{" "}
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0
        </div>
      </footer>
    );
  }
}

export default Footer;
