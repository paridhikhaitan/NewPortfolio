import React from "react";
import Navbar from "../components/navbar";
import { Row, Col, Container } from "react-grid-system";
import Footer from "../components/footer";

class Frontiers extends React.Component {
  render() {
    return (
      <div class="innerPages">
        <Navbar fromPage="designcommunity" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>DESIGN FRONTIERS</h1>
            </Col>
            <Col xs={12} md={8}>
              <br />
              <p>
                Designers from Intuit led teams of students through a day-long
                design sprint, shared the Intuit design process, and taught a
                crash course on design critique and rationale.
                <br />
                While this was a simple one page site, I learnt a lot about
                React States, DOM Manipulation and CSS transitions for this
                project, which is why I displayed it :)
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <br />
              <span>
                <p>
                  Role : Web Developer
                  <br />
                  <br />
                  Tech Stack : React, Sass
                  <br />
                  <br />
                  Dates : March 2019
                </p>
                <br />
              </span>
            </Col>
          </Row>
          <Row justify="end" className="techStack"></Row>

          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/frontiers/splash.jpg")}
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
              <a href="http://frontiers.ucsddesign.co/">
                <button>VISIT SITE</button>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://github.com/ucsddesignco/frontiers2020">
                <button>VIEW GITHUB</button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Challenge</h2>
              <p>
                Since it is an industry led event, we wanted a website where
                students could get information and register for the conference.
                Intuit also needed a website that they could show their
                managers, to reaffirm the impact on Design Students at UCSD.
              </p>
            </Col>
            <Col xs={12} className="keyFeatures">
              <h2>Key Features</h2>
              <p>
                - Student designers can Sign Up for the conference
                <br />- Designers can see the FAQs to get information about the
                conference and what they should expect. This helped us increase
                attendance by 60%.
                <br />- Industry leaders from Intuit can present this site as a
                source of impact to their managers.
              </p>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Frontiers;
