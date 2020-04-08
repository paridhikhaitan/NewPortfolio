import React from "react";
import { Row, Col } from "react-grid-system";
import { spacer2 } from "./constants";

class ContactFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <h4> Made by Paridhi 👽</h4>
        <a href="https://www.linkedin.com/in/paridhi4699/">
          <h4>linkedin</h4>
        </a>

        <a href="https://github.com/paridhikhaitan">
          <h4>github</h4>
        </a>
      </div>
    );
  }
}

export default ContactFooter;
