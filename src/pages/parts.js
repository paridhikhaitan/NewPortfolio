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
          width = "100vw"
          style={{
            opacity: "0.8",
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
        <Navbar />
        <div className="splashHeading">
          <div>
            <h1>
              Hi, I'm Paridhi! I'm a web developer + designer who is studying
              Computer Science at UCSD.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default parts;
