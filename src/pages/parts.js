import React from "react";
import Particles from "react-particles-js";
import { Container, Row, Col } from "react-grid-system";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class parts extends React.Component {
  render() {
    return (
      <div>
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
                value: 80
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
        <Navbar fromPage="home" />
        <div className="splashHeading">
          <div>
            <h1 style={{ fontSize: "6rem", lineHeight: "7.8rem" }}>
              Hi, I'm Paridhi!
            </h1>
            <br />
            <h1>
              I'm a web developer + designer who is passionate about building
              products and unique experiences for users.
            </h1>
            <br />
            <h1
              style={{
                fontSize: "2rem",
                lineHeight: "2.8rem",
                color: "#919191"
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
