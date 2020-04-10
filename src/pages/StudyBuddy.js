import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class StudyBuddy extends React.Component {
  render() {
    return (
      <div class="innerPages">
        <Navbar fromPage="studybuddy" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>UCSD STUDY BUDDY</h1>
            </Col>
            <Col xs={12} md={8}>
              <p>
                We are UCSD Study Buddy, a peer-to-peer file sharing platform.
                With our web app, students can easily navigate and find
                textbooks, notes, syllabus or practice exams that they need.
                <br />
                We realised that current information is scattered in endless
                Facebook threads posted on Facebook, Reddit, Google groups. With
                our platform, users can remain anonymous when requesting for
                resources. I worked as the web developer alongside two very
                talented product designers!
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <span>
                <p>
                  Role : Full Stack Developer
                  <br />
                  <br />
                  Tech Stack : React, Node.js, Sass, Express, MongoDB, Mongoose,
                  Heroku
                  <br />
                  <br />
                  Dates : January 2019 - <b>Present</b>
                  <br />
                  <br />
                  Team :{" "}
                  <a href="https://chenalison.com/" target="_blank">
                    Alison Chen{" "}
                  </a>{" "}
                  ,{" "}
                  <a href="" target="_blank">
                    Vicky Ly{" "}
                  </a>
                </p>
                <br />
              </span>
            </Col>
          </Row>
          <Row justify="end" className="techStack"></Row>

          <Row justify="center">
            <Col md={8} xs={12}>
              <img
                src={require("../images/studybuddy/splash.jpg")}
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
              <a href="https://study-buddy-helper.herokuapp.com/">
                <button>VISIT SITE</button>
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a href="https://github.com/paridhikhaitan/studybuddy2.0">
                <button>VIEW GITHUB</button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Challenge</h2>
              <p>
                Currently, most of the class related information is scattered
                across multiple facebook and reddit groups, and also Google
                Spreadsheets. Students don't have a centralised place to access
                and share relevant information and books easily get lost in
                countless Facebook threads.
              </p>
            </Col>

            <Col xs={12}>
              <h2>Solution</h2>
              <p>
                Create a centralised peer to peer file sharing dashboard where
                student's can access, upload and request resources. That too
                anonymously!
              </p>
            </Col>
            <Col xs={12} className="keyFeatures">
              <h2>Key Features</h2>
              <p>
                - Creating a RESTful online server that allows books, uploads
                and wishes to be stored persistently and accessed by the user. I
                was really excited to use the MERN stack to develop my database.
                View the REST API for{" "}
                <a href="https://warm-mesa-02077.herokuapp.com/api/books">
                  resources
                </a>{" "}
                (such as books, lecture notes, exam materials and syllabus) and{" "}
                <a href="https://warm-mesa-02077.herokuapp.com/api/wishes">
                  user requests
                </a>{" "}
                (for the books that they need)
                <br />
                <br />- User can view all the resources in our database. We
                currently have over 200 materials and hope to keep expanding it.
                This list is sorted based on the subject and updated in real
                time.
                <Row justify="center">
                  <Col md={6} xs={10}>
                    <img
                      src={require("../images/studybuddy/books.jpg")}
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
                <br />- As it's a peer to peer file sharing platform, we wanted
                users to help one another and upload their notes! Through our
                user research, we found that anonymity was important to users.
                This was also the phase where we went through two versions, and
                settled on this one. It increased our potential users by 50%.
                <Row justify="center">
                  <Col md={6} xs={10}>
                    <img
                      src={require("../images/studybuddy/upload.jpg")}
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
                <br />- Lastly, to make our platform robust, we wanted to allow
                users to request resources. Once they did, their peers could
                seamlessly upload them to our database and it would be available
                for all UCSD Students.
              </p>
              <Row justify="center">
                <Col md={6} xs={10}>
                  <img
                    src={require("../images/studybuddy/wishlist.jpg")}
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
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default StudyBuddy;
