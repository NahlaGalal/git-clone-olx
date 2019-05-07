import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/about.css";

export default class About extends Component {
  render() {
    return (
      <main className="about container">
        <FontAwesomeIcon icon="quote-left"/>
        <h2 className="header">
          ABOUT US
        </h2>
        <p>
          Hi, this is just a simple project we created as part of our learning
          path to implement SQL databases, we created a small web app to help
          people sell their used items that they don't need anymore, and earn a
          little extra cash for it. It's just a small piece to experiment with
          our skills.
          <span>This project was created under the supervision of:</span>
          <strong>Professor / Hesham Arafat</strong>
          <strong>Teaching Assistant Engineer / Sarah Ayyad</strong>
          ....
        </p>
        <div className="collaporators">
          <span>Our small team</span>
          <ul>
            <li>Ahmed Muhammed AlMoselhy</li>
            <li>Nahla Galal Muhammed</li>
            <li>Mustafa Muhammed AlGayar</li>
          </ul>
        </div>
        <FontAwesomeIcon icon="quote-right" className="quote-right"/>
      </main>
    );
  }
}
