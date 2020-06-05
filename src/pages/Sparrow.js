import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class Sparrow extends React.Component {
  render() {
    return (
      <div class="innerPages sparrow">
        <Navbar fromPage="sparrow" />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>SPARROW</h1>
            </Col>
            <Col xs={12} md={8}>
              <p>
                Over 20 million people in the United States are non-english
                speakers. Because of this, they have trouble finding
                appointments that support their health insurance, and are afraid
                to visit doctors due to medical jargon that they can’t
                understand. In my information architecture course of 5 weeks, we
                created <b>Sparrow</b>, a healthcare app that allows users to
                find suitable health insurance plans and allows them to
                translate medical terms with their health care providers.
              </p>
            </Col>
            <Col md={4} xs={12} className="techStack">
              <span>
                <p>
                  Role : UI/UX Design + Content Strategy
                  <br />
                  <br />
                  Dates : August 2019
                  <br />
                  <br />
                  Team : Amaya Mali, Paloma Fernandez, Nancy Zhou, Jenny, Shan
                  Prasad
                </p>
                <br />
              </span>
            </Col>
          </Row>
          <Row justify="end" className="techStack"></Row>

          <Row justify="center">
            <Col md={10} xs={12}>
              <img
                src={require("../images/sparrow/sparrow_landing.jpg")}
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
              <h2>Problem Statement</h2>
              <p>
                Non-native english speakers need to be able to secure and access
                health insurance options, and be able to communicate with their
                providers effectively.
              </p>
            </Col>
            <Col xs={12}>
              <h2>Needfinding</h2>
              <p>
                Through interviews with users who didn’t have practice with
                health insurance as they were either international students in
                University, didn’t know how to move away from their family plan,
                had undocumented or non-english speaking family members, we
                found the following features indispensible to our application
                <br />
                <div className="innerNumbers">
                  1. A streamlined way for users to sign up for health
                  insurance.
                  <br />
                  2. Translate medical jargon with proper context, and
                  diagrammatic support for users.
                  <br />
                  3. Allow users to find affordable health care and keep track
                  of follow up appointments.
                </div>
              </p>
              <p className="mediumArticle">
                Read about our{" "}
                <a
                  href="https://medium.com/ucsd-cogs-187a-summer-2018/brainstorming-and-logos-sparrows-d4244452654f"
                  target="_blank"
                >
                  Brainstorming on Medium
                </a>
                .
              </p>
            </Col>

            <Col xs={12}>
              <h2>User Personas and Storyboards</h2>
              <Row justify="center">
                <Col xs={8} md={5}>
                  <img src={require("../images/sparrow/storyboard.png")} />
                  <p>
                    Needs + Wants : Has chronic back pains and needs to find low
                    cost healthcare. Is a non-native english speaker and wants
                    to be able to translate her conversations.
                  </p>
                </Col>
                <Col xs={8} md={5}>
                  <img src={require("../images/sparrow/persona.png")} />
                  <p>
                    This storyboard reflects an instance when a non-english
                    speakers' back starts hurting, they’re able to find
                    healthcare in their area, and through Sparrow, they can
                    translate their entire visit with their doctor.
                  </p>
                </Col>
              </Row>
              <p className="mediumArticle">
                Read about our{" "}
                <a
                  href="https://medium.com/ucsd-cogs-187a-summer-2018/personas-storyboards-and-portfolio-sparrow-e8a5b758cd66"
                  target="_blank"
                >
                  Personas and Storyboards on Medium
                </a>
                .
              </p>
            </Col>

            <Col xs={12} className="keyFeatures">
              <h2>Competitive Analysis</h2>
              <p>
                We compared Sparrow across multiple health care apps that are
                very popular. Sparrow is unique because it streamlines the
                health insurance process, which is essential for the 3 million
                California residents who don’t have health insurance. As
                language barrier is also an important issue, we wanted the
                ability to translate medical terminologies amongst other things.
                <Row justify="center">
                  <Col md={8} xs={8}>
                    <img
                      src={require("../images/sparrow/competitive_analysis.png")}
                      style={{ border: "2px solid white" }}
                    />
                  </Col>
                </Row>
              </p>
            </Col>

            <Col xs={12}>
              <h2>Low Fidelity Prototypes</h2>
              <p>
                We created designs for our main landing dashboard page, that
                would consist of the most important information. From there, the
                user could navigate to the speech translation page, find health
                care page, and insurance card page.
              </p>
              <br />
              <br />
              <Row justify="center">
                <Col md={8} xs={10}>
                  <img
                    src={require("../images/sparrow/low_fidelity_prototypes.png")}
                  />
                </Col>
              </Row>
              <p className="mediumArticle">
                Read about our{" "}
                <a
                  href="https://medium.com/ucsd-cogs-187a-summer-2018/week-3-prototyping-da24d523562b"
                  target="_blank"
                >
                  Prototyping process on Medium
                </a>
                .
              </p>
            </Col>

            <Col xs={12}>
              <h2>User Testing</h2>
              <p>
                We allowed users to interact with our app and asked them to talk
                through the process. We observed them through a safe distance
                and took notes of their interaction. Through this process, we
                noticed the following issues with our application.
              </p>

              <p>
                <div className="innerNumbers">
                  1. Users were unsure how many documents they needed to upload
                  to verify their insurance, as the app made it seem as though
                  they only needed one.
                  <br />
                  2. User health diagram view was not correctly labeled, and
                  made it tough for users to click on a pain point.
                  <br />
                  3. Buttons did not have confirmation feedback and users didn’t
                  know whether they had input their information correctly.
                  <br />
                  4. Some users felt that the app had overwhelmingly high number
                  of features, that diluted the app.
                </div>
                In light of these, we decided to stick with streamlining the
                insurance, language translation and health care information as
                our priority.
              </p>
              <p className="mediumArticle">
                Read about our{" "}
                <a
                  href="https://medium.com/ucsd-cogs-187a-summer-2018/week-4-conducting-user-testing-5a7489dfcd18"
                  target="_blank"
                >
                  User Testing on Medium
                </a>
                .
              </p>
            </Col>

            <Col xs={12}>
              <h2>Alternate Designs</h2>
              <p>
                This was another workflow to sign up for Health Insurance,
                however, we made changes to it after our user testing phase.
              </p>
              <Row justify="center">
                <Col md={8} xs={10}>
                  <img src={require("../images/sparrow/Low-Fi.png")} />
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="finalFeatures">
              <h2>Final Product</h2>
              <Row justify="center" align="center">
                <Col xs={6} md={3}>
                  <img
                    src={require("../images/sparrow/insurance_process.gif")}
                    alt="Streamline Health Insurance"
                  />
                </Col>
                <Col xs={10} md={7}>
                  <h3>Streamlined Health Insurance Enrollment</h3>
                  <p>
                    - Get a list of recommended insurances based off information
                    you provide.
                  </p>
                  <p>- Enroll in your recommended insurance.</p>
                  <p>
                    {" "}
                    - Provision to add an existing insurance plan by
                    effortlessly scanning your insurance card.
                  </p>
                </Col>
              </Row>
              <Row justify="center" align="center">
                <Col xs={6} md={3}>
                  <img
                    src={require("../images/sparrow/translation_process.gif")}
                    alt="Translations for language & medical terms"
                  />
                </Col>
                <Col xs={10} md={7}>
                  <h3>Translations for language & medical terms</h3>
                  <p>
                    - Translate tricky medical terms by selecting preferred
                    language during app setup.
                  </p>
                  <p>
                    - Transcribe medical conversations in real-time using our
                    speech to text API.{" "}
                  </p>
                  <p>- Share transcription with family and friends. </p>
                </Col>
              </Row>

              <Row justify="center" align="center">
                <Col xs={6} md={3}>
                  <img
                    src={require("../images/sparrow/medical_care_process.gif")}
                    alt="Translations for language & medical terms"
                  />
                </Col>
                <Col xs={10} md={7}>
                  <h3>Easily find cost effective medical care</h3>
                  <p>
                    - Find a specialist in your region by entering your
                    symptoms.
                  </p>
                  <p>
                    - Alternatively, mark your symptoms through our inbuilt
                    diagram from maximum comprehension.{" "}
                  </p>
                  <p>- Make an appointment directly through the Sparrow App.</p>
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

export default Sparrow;
