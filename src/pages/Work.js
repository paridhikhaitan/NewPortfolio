import React, { Component } from "react";
import { Row, Col, Container } from "react-grid-system";
import { work } from "../components/work";
import { spacer1, spacer2, spacer3, spacer4 } from "../components/constants";
import Tilt from "react-tilt";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const workList = work.map(tile => (
  <Col md={5} style={{ marginBottom: spacer3, marginTop: tile.margin }}>
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
      }}
    >
      <Tilt>
        <a href={tile.web}>
          <img
            src={require(`../images/workImages/${tile.imgLink}.jpg`)}
            alt={tile.company}
            className="workTile"
          />
        </a>
      </Tilt>
    </div>
  </Col>
));

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar fromPage="work" />
        <Container>
          <Row>
            <h1 id="header">WORK</h1>
          </Row>
          <Row justify="center" id="workList">
            {workList}
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
