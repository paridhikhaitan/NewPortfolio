import React from "react";
import Particles from "react-particles-js";
import { Container, Row, Col } from "react-grid-system";

class parts extends React.Component {
  render() {
    return (
      <div>
        <Particles
          height="100vh"
          style={{
            opacity: "0.8",
            position: "fixed",
            left: "0",
            top: "0"
          }}
          params={{
            particles: {
              number: {
                value: 50
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
