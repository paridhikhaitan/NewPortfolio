import React from "react";
import { deflate } from "zlib";
import { Row, Col, Container } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { spacer3, spacer2 } from "../components/constants";

class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar fromPage="about" />
        <h1 id="header">ABOUT</h1>
        <Container>
          <Row className="aboutPage" justify="center" align="center">
            <Col xs={8} md={4}>
              <img src={require("../images/aboutPagePhoto.jpg")} />
            </Col>
            <Col xs={8} md={6}>
              <div>
                <p>
                  Hi, I'm Paridhi. I'm currently pursuing a B.S. in Computer
                  Science with a minor in Design at the University of
                  California, San Diego.
                  <br />
                  <br />
                  Last summer, I served as a Tutor for Android Development at{" "}
                  <a href="/fbu">Facebook University</a>. I currently work with
                  Professor Steven Dow at Protolab, on the{" "}
                  <a href="/d4sd">D4SD Project</a> as a Web Developer. I also
                  serve on the board of{" "}
                  <a href="/comingsoon">Design Co at UCSD</a>, wherein I've
                  built numerous websites and organised events for the
                  community!
                  <br />
                  <br />
                  I'm interested in the intersection of code and design. I work
                  with{" "}
                  <a href="https://teachertech.sdsc.edu/ucsd-anita-borg-leadership-and-engagement-able-program/">
                    Anita B. Org Leadership and Engagement (ABLE) Committee
                  </a>{" "}
                  and{" "}
                  <a href="http://wic.ucsd.edu">Women in Computing @UCSD </a>
                  to promote female representation in Computer Science through
                  outreach events, mentorship and workshops.
                  <br />
                  <br />I love room decor videos, tiny houses, BANNERS, building
                  sites and, on the left, I'm featured holding a Kaddu!
                </p>
              </div>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default About;
