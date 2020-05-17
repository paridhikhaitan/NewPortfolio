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
                Through our web platform, students can access, upload and
                request all essential books/notes in real time, through a
                centralised dashboard. These are filtered based on the professor
                offering and course and the year the course was taken in, to
                help students find their required materials.
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
              <a href="https://study-buddy-ucsd.netlify.app/">
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
              <h2>Problem Statement</h2>
              <p>
                Currently, all available digital resources for UCSD students,
                such as textbooks, syllabus, exam materials, notes, are
                scattered across different social media platforms such as
                Facebook and Reddit. Students need a centralised and anonymous
                source to access and provide educational materials.
              </p>
            </Col>

            <Col xs={12}>
              <h2>User Research</h2>
              <p>
                We started our user research through interviews. We chose UCSD
                Students as our target demographic, as they were our user group.
                After speaking with them about their experiences with Facebook
                Groups such as{" "}
                <a
                  href="https://www.facebook.com/groups/1610851409128163"
                  target="_blank"
                >
                  UCSD PDF viewer
                </a>{" "}
                and Reddit textbook threads, we wanted to understand their key
                issues. This is what we narrowed it down to:
                <br />
                <div className="innerNumbers">
                  1. The books on Facebook and Reddit groups were outdated :
                  wrong versions, not specific to the professor/year and broken
                  links. <br />
                  2. It was tough for students to find specific/verified books
                  based on filters. <br />
                  3. Some students did not have social media accounts, or
                  weren’t aware of the existence of Facebook and Reddit Groups.{" "}
                  <br />
                  4. Due to the public nature of these groups, students didn’t
                  feel comfortable requesting for course materials.
                </div>
              </p>
            </Col>
            <Col xs={12}>
              <h2>Needfinding</h2>
              <p>
                After our user research we entered our needfinding phase, and
                decided on the following needs for our users.
                <br />
                <div className="innerNumbers">
                  1. Include 4 categories of educational material : textbooks,
                  exam resources, lecture notes and syllabus.
                  <br />
                  2. Tag them based on the professor, the year and the specific
                  course number of the material, to ensure it’s relevant and
                  easy to find.
                  <br />
                  3. Allow users to easily request resources on our webapp.
                  <br />
                  4. Provide online links to all the material on our websites.
                  <br />
                  5. Create provision for helpful users to upload necessary
                  books and update in real time.
                  <br />
                  6. Ensure that all these facilities were available in a
                  centralised dashboard
                </div>
              </p>
            </Col>

            <Col xs={12}>
              <h2>User Personas</h2>
              <Row justify="center" className="UserPersona">
                <Col xs={4} md={2}>
                  <img
                    src={require("../images/studybuddy/persona1.svg")}
                    style={{ marginTop: 0 }}
                  />
                </Col>
                <Col xs={8}>
                  <p>
                    Pappu is an introverted and shy student, who doesn’t feel
                    comfortable asking people for resources on social media
                    groups, and doesn’t respond to their requests either. He
                    doesn’t frequent social media and isn’t aware that the
                    resources are available there. Now he can’t find the
                    syllabus for an old class anywhere online.
                  </p>
                </Col>
              </Row>
              <Row justify="center" className="UserPersona">
                <Col xs={4} md={2}>
                  <img
                    src={require("../images/studybuddy/persona2.svg")}
                    style={{ marginTop: 0 }}
                  />
                </Col>
                <Col xs={8}>
                  <p>
                    Lu is in her third year of university. She is desperately
                    searching for the textbook for MGT 103 offered by Prof.
                    McKenzie in Fall 2019. However, it’s hard to find books
                    buried in the endless Facebook Threads, and within the excel
                    sheets, most of the links are broken or irrelevant. She
                    wishes there was a space solely dedicated to tagged and
                    verified University resources.
                  </p>
                </Col>
              </Row>
              <Row justify="center" className="UserPersona">
                <Col xs={4} md={2}>
                  <img
                    src={require("../images/studybuddy/persona3.svg")}
                    style={{ marginTop: 0 }}
                  />
                </Col>
                <Col xs={8}>
                  <p>
                    Camilla is an enthusiastic student who worked tirelessly
                    through university to maintain an almost perfect GPA. Now in
                    her final quarter of university, she has a bunch of notes,
                    textbooks and course materials that she no longer has use
                    for. However, she was helped by her seniors and wants to pay
                    it forward by providing her lecture notes and exam materials
                    for students who are now struggling in class.
                  </p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="keyFeatures">
              <h2>Development</h2>
              <p>
                As the Full-Stack Developer for our Project, based on
                need-finding, user research and design iterations, I made the
                following Dev decisions
                <div className="innerNumbers">
                  1. As it was a peer to peer file sharing platform, and most
                  college students had their documents on either laptop or
                  tablets we developed for those screen sizes specifically{" "}
                  <br />
                  2. Develop a RESTful online server that would update our
                  website in real time.
                  <br />
                  3. Create REST APIs to get and post resources from the server
                  using Node.js, Express.js and MongoDB as our database.
                  <br />
                  4. Develop a clean UI with minimal clutter on React by
                  creating custom components and using 20-column Grid System for
                  responsiveness.
                </div>
              </p>
            </Col>

            <Col xs={12}>
              <h2>First Design Iteration</h2>
              <Row justify="center">
                <Col md={6} xs={10}>
                  <img
                    src={require("../images/studybuddy/firstDesign.png")}
                    style={{ border: "2px solid white" }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <p>
                Our initial prototype for UCSD StudyBuddy had two important
                features <br />
                <div className="innerNumbers">
                  1. A wish list column on the right where users could request
                  any resource that they wanted, and a helpful UCSD student
                  could upload them. <br />
                  2. A list of all our educational material, alphabetically
                  sorted based on the course name, where users could find more
                  information.
                </div>
              </p>
            </Col>

            <Col xs={12}>
              <h2>Alternate Designs</h2>
              <p>
                {" "}
                We wanted to maximize user engagement, especially to Upload
                books, as we relied on the goodwill of users to upload materials
                and keep the site running. With this need in mind, we designed 2
                workflows for <b>user upload.</b>
              </p>
              <Row justify="center">
                <Col md={6} xs={10}>
                  <img
                    src={require("../images/studybuddy/alternateDesigns.png")}
                    style={{ border: "2px solid white" }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <p>
                Design 1 : Followed a TypeForm approach, where a user had to
                complete one task at a time. We wanted to encourage resources by
                only asking for one item at a time and complete the task in 6
                simple steps.
              </p>
              <Row justify="center">
                <Col md={6} xs={10}>
                  <img
                    src={require("../images/studybuddy/uploadScreen.png")}
                    style={{ border: "2px solid white" }}
                  />
                </Col>
              </Row>
              <p>
                Design 2 : Followed a more conventional form, wherein we asked
                the users for all the information at one go. Our motivation
                behind this design was that by seeing the entire form in one go,
                users would realise how easy the task was.
              </p>
            </Col>

            <Col xs={12}>
              <h2>User Testing</h2>
              <p>
                We asked the user to find any desired textbook within the app
                and noticed the following patterns:
                <div className="innerNumbers">
                  1. Users were confused by the folder names (E.g. “BIMM 103”).
                  <br />
                  2. As the folders weren’t listed in alphabetical order, users
                  spent a lot of time locating their ideal folders.
                  <br />
                  3. When searching for a specific link, users wanted to be able
                  to sort it (based on year, professor etc. ) rather than
                  scrolling through the entire app.
                </div>
              </p>

              <p>
                We also asked them to Upload a textbook through each of the
                aforementioned workflows:
                <div className="innerNumbers">
                  1. The labels were confusing (didn’t know they had to upload a
                  link or folder)
                  <br />
                  2. Surprisingly, 50% of our users enjoyed Design 1 for Upload
                  (due to it’s clean UI) and the others enjoyed Design 2 (as it
                  was concise).
                  <br />
                  3. Some users wanted to maintain anonymity while uploading.{" "}
                </div>
                In general, users enjoyed the simple design, found their
                required materials easily, and understood the workflow behind
                the app.
              </p>
            </Col>

            <Col xs={12} className="keyFeatures">
              <h2>Final Product</h2>
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
            <Col xs={12}>
              <h2>Future Work</h2>
              <p>
                Due to remote learning, student’s are facing even more
                challenges accessing resources such as textbooks, lecture notes
                etc. To create a production app, we intend on implementing the
                following steps:
                <br />
                <div className="innerNumbers">
                  1. Search bar that will allow users to quickly access
                  materials.
                  <br />
                  2. Ability to upload direct files/folders instead of web
                  hosted links
                  <br />
                  3. Ability to upload multiple links simultaneously.
                  <br />
                  4. Login profiles for users to be able to track how many
                  resources they’ve submitted.
                </div>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default StudyBuddy;
