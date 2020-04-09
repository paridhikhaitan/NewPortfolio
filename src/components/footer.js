import React from "react";
import { Row, Col } from "react-grid-system";
import { spacer2 } from "./constants";

class ContactFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div id="madeby">
          <h4> Made by Paridhi 👽</h4>
        </div>
        <div id="contactInfo">
          <a href="mailto:paridhi4699@gmail.com" target="_blank">
            <h4>e-mail</h4>
          </a>
          <a href="https://www.linkedin.com/in/paridhi4699/" target="_blank">
            <h4>linkedin</h4>
          </a>
          <a href="https://github.com/paridhikhaitan" target="_blank">
            <h4>github</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default ContactFooter;
