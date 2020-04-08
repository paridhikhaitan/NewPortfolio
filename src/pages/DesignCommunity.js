import React from "react";
import { Row, Col, Container } from "react-grid-system";

class DesignCommunity extends React.Component {
  componentDidMount() {
    document.getElementById("communitySplashImage").style.display = "none";
  }

  render() {
    return (
      <div class="innerPages">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>DESIGN COMMUNITY</h1>
            </Col>
            <Col xs={12} md={8}>
              <p>
                This page is an online directory aimed to connect UCSD student
                designers and alumni with each other. As the Web Developer for
                UCSD Design Co, I collaborated with creative designers to bring
                our design community to the students and recruiters!
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <span>
                <p>
                  Role : Web Developer
                  <br />
                  Tech Stack : React, Node.js, Sass, Express
                  <br />
                  Dates : December 2019 - <b>Present</b>
                </p>
                <br />
              </span>
            </Col>
          </Row>
          <Row justify="end" className="techStack"></Row>

          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/designcommunity/DComSplash.jpg")}
                style={{ border: "2px solid white" }}
                id="communitySplashImage"
                onLoad={() => {
                  document.getElementById(
                    "communitySplashImage"
                  ).style.display = "block";
                }}
              />
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col xs={6} md={3}>
              <a href="http://community.ucsddesign.co/">
                <button>VISIT SITE</button>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://github.com/ucsddesignco/designcommunity20">
                <button>VIEW GITHUB</button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Challenge</h2>
              <p>
                Design is one of the most popular majors at UCSD, however,
                student's do not receive sufficient practical training in class
                to prepare them for industry. A lot of students were under
                prepared and some didn't have portfolios. We wanted to help our
                community!
              </p>
            </Col>

            <Col xs={12}>
              <h2>Solution</h2>
              <p>
                We created an online website where designers (current and
                alumni) can showcase their work. We'll present this to our
                industry partners to help with recruitment. This will also give
                student's the chance to derive inspiration and be proud of their
                work.
              </p>
            </Col>
            <Col xs={12} className="keyFeatures">
              <h2>Key Features</h2>
              <p>
                - Designers can be filtered and sorted based on their
                specialisation.
                <br />- Continuous shuffling of designers on refresh, reset
                filters, etc. to prevent biases.
                <br />
                - Access to design portfolios, LinkedIn of all designers for
                potential employers.
                <br />- Ability to nominate fellow student designers to be a
                part of DESIGN COMMUNITY.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DesignCommunity;
