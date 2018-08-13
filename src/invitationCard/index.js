import React, { Component } from "react";
import "./index.css";

import Page1 from "./page1";
import Page2 from "./page2";

export default class InvitationCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="fullpage">
        <Page1 />
        <Page2 />
      </div>
    );
  }
}
