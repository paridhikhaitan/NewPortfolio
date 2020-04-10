import React from "react";
import { Row, Col, Container } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { spacer2, spacer1 } from "../components/constants";

export default class ASGS extends React.Component {
  render() {
    return (
      <div class="innerPages">
        <Navbar fromPage="designcommunity" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>A.S. GRAPHIC STUDIO</h1>
            </Col>
            <Col xs={12} md={8}>
              <br />
              <p>
                I just joined the A.S. Graphic Studio, and I'm super excited to
                be a part of it! Currently, I'm redesigning the website for
                Black History Month @ UCSD. Look out for more updates on my new
                projects!
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <br />
              <span>
                <p>
                  Role : Webmaster
                  <br />
                  <br />
                  Dates : April 2020 - Present
                </p>
                <br />
              </span>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            position: "absolute",
            bottom: 0
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}
