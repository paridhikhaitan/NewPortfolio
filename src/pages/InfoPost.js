import React from "react";
import Navbar from "../components/navbar";
import { Row, Col, Container } from "react-grid-system";
import Footer from "../components/footer";
import { spacer2, spacer3 } from "../components/constants";

const mainImage = {
  width: "75%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "3vw",
  marginBottom: "3vw"
};

const oldInfo = {
  width: "45%",
  height: "auto",
  margin: "2vw",
  alignItems: "center",
  justifyContent: "center"
};

class InfoPost extends React.Component {
  render() {
    return (
      <div class="innerPages">
        <Navbar fromPage="infopost" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>INFOPOST</h1>
            </Col>
            <Col xs={12} md={8}>
              <br />
              <p>
                A San Diego based startup, InfoPost is your personal AI which
                checks the news you read for credibility. We give trust scores
                to your news so that you don't consume fake news. This was my
                first position as a Web Developer, where I learnt React, CSS,
                JavaScript and so much more!
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <br />
              <span>
                <p>
                  Role : Web Development Intern
                  <br />
                  <br />
                  Tech Stack : React, Node.js, CSS, Express, Google Material UI
                  <br />
                  <br />
                  Dates : January 2019 - <b>October 2019</b>
                </p>
                <br />
              </span>
            </Col>
          </Row>

          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/infopost/infopost.jpg")}
                style={{ border: "2px solid white" }}
              />
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col xs={6} md={4}>
              <a href="https://github.com/paridhikhaitan/InfopostLandingPage">
                <button>VIEW GITHUB</button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Challenge</h2>
              <p>
                As a newly founded startup, we needed a webpage that would
                display information about the company in an interactive manner.
                We also wanted to begin building the front end of our Web
                Application using React, npm packages, and Google Material UI.
              </p>
            </Col>

            <Col xs={12}>
              <h2>Solution</h2>
              <p>
                We decided to come up with an MVP that would have information
                about the company, team, AI and Machine Learning technology. I
                also collaborated with UI/UX Designers to build the login,
                signup, and profile in our MVP product.
              </p>
            </Col>
            <Col xs={12} className="keyFeatures">
              <h2>Contribution and Takeaways</h2>
              <p>
                - Investors can see information about the company
                <br />- Went through 2 rounds of redesign to keep the website
                consistent with the app rebrand
                <br />
                - Created initial Web App mockups for the login, signup, and
                profile screens.
                <br />- Participated in weekly scrum meetings to decide tasks,
                learnt several new technologies to deliver the product in time.
                <br /> - Helped launch the app for initial Beta testing on the
                App store and Google Play Store.
                <br /> Note: The website has been changed now, however, I'm
                grateful that I was able to contribute to this amazing startup!
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default InfoPost;
