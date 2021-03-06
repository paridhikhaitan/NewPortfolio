import React from "react";
import Particles from "react-particles-js";
import { Hidden, Visible, Container, Row, Col } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class parts extends React.Component {
  render() {
    return (
      <div>
        <Hidden xs sm md>
          <Particles
            height="100vh"
            width="100vw"
            style={{
              opacity: "0.85",
              position: "fixed",
              left: "0",
              top: "0"
            }}
            params={{
              particles: {
                number: {
                  value: 60
                },
                move: {
                  direction: "random",
                  speed: 1
                },
                size: {
                  value: 3
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
        </Hidden>
        <Hidden lg xl>
          <Particles
            height="100vh"
            width="100vw"
            style={{
              opacity: "0.85",
              position: "fixed",
              left: "0",
              top: "0",
            }}
            params={{
              particles: {
                number: {
                  value: 25
                },
                color:{
                  value: "#a1a1a1"
                },
                move: {
                  direction: "random",
                  speed: 1
                },
                size: {
                  value: 3,
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
        </Hidden>
        <Navbar fromPage="home" />
        <div className="splashHeading">
          <div>
            <h1 style={{ fontSize: "6rem", lineHeight: "7.8rem" }}>
              Hi, I'm Paridhi!
            </h1>
            <br />
            <h1 style={{ fontFamily: "Karla", marginTop: "2rem" }}>
              I'm a web developer + designer who is passionate about building
              pixel-perfect products and unique experiences for everyone!
            </h1>
            <br />
            <h1
              style={{
                fontSize: "2rem",
                lineHeight: "2.8rem",
                color: "#919191",
                fontFamily: "Karla"
              }}
            >
              {" "}
              Studying Computer Science + Design @ UCSD
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default parts;
