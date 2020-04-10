import React from "react";
import Navbar from "../components/navbar";
import { Row, Col, Container } from "react-grid-system";
import Footer from "../components/footer";

class FBUCodepath extends React.Component {
  render() {
    return (
      <div className="innerPages">
        <Navbar fromPage="fbuCodepath" />

        <Container>
          <Row>
            <Col xs={12}>
              <h1>FACEBOOK UNIVERSITY X CODEPATH</h1>
            </Col>
            <Col xs={12} md={8}>
              <br />
              <p>
                Last summer, I had the opportunity to mentor at the Facebook
                University for Engineering as a Tutor for Android Development.
                Under the Codepath cohort, we led an Android Development
                bootcamp for the first three weeks of the FBU program. During
                this period, we wanted the interns to feel accustomed to Android
                Development and empower them to create their own apps. Our class
                consisted of 60 students from diverse ethnic and academic
                backgrounds. I led breakout sessions on special topics like
                API/JSON requests, Fragments vs. Intents, view integration and
                Parse Server.
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <br />
              <span>
                <p>
                  Role : Android Development Tutor
                  <br />
                  <br />
                  Tech Stack : Android Studio, Java, Parse, Twitter Developer
                  API, MovieDB API
                  <br />
                  <br />
                  Dates : May 2019 - <b>July 2019</b>
                </p>
                <br />
              </span>
            </Col>
          </Row>
          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/FBUCodepath/FBUCodepath1.jpg")}
                alt="Class Photo"
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
          <Row>
            <Col xs={12}>
              <h2>Preparation</h2>
              <p>
                The goal of the Codepath bootcamp was for the interns to feel
                accustomed to Android Development and empower them to create
                their own applications. In preparation of our mentorship
                position, I created four applications on Android Studio, that I
                believe were instrumental to my success: <br />
                <br />
                <div>
                  <h5>
                    <a
                      href="https://github.com/paridhikhaitan/FBUInstagram"
                      target="blank"
                    >
                      {" "}
                      Instagram
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://github.com/paridhikhaitan/TwitterFBU"
                      target="blank"
                    >
                      {" "}
                      Twitter
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://github.com/paridhikhaitan/Flicks"
                      target="blank"
                    >
                      {" "}
                      Flixster
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://github.com/paridhikhaitan/SimpleToDoApp"
                      target="blank"
                    >
                      {" "}
                      Simple To-Do App
                    </a>
                  </h5>
                </div>
                Along with this, we solved several labs pertaining to Material
                UI, Parse Chat, integration of Google Maps and custom search
                within the app.
                <br />
                <br />
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/FBUCodepath/FBUCodepath2.jpg")}
                alt="Class Photo"
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
          <Row>
            <Col xs={12} className="techStack">
              <h2>Outcome</h2>
              <p>
                Through the course of the program, I grew as both, a developer
                and a mentor. I came into this program completely unfamiliar
                with Android Studio, and rigourously practiced the curriculum.{" "}
                <br />
                90% of our class at Android Menlo Park successfully received
                return offers from Facebook for a Summer 2020 internship. Most
                of the students had never worked on either App Development or
                Android Studio before the start of the program, however, after
                the 3 week bootcamp, they were successfully able to produce
                their own Android Applications through the course of their
                internship.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default FBUCodepath;
