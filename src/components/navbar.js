import React from "react";

class Navbar extends React.Component {
  componentDidMount() {

    if(this.props.fromPage==="home"){
      document.getElementById("home").style.display = "none"
    }
    if (this.props.fromPage === "work" || this.props.fromPage === "about") {
      document.getElementById(this.props.fromPage).classList.add("active");
      console.log("workworkwokr");
    }
  }
  render() {
    return (
      <div className="topNav">
        <div id="home">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="play_arrow_24px">
              <path
                id="icon/av/play_arrow_24px"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.125 15L21.875 23.75V6.25L8.125 15ZM12.7875 15L19.375 10.8V19.2L12.7875 15Z"
                fill="white"
              />
            </g>
          </svg>
          <h4>
            <a href="/">home</a>
          </h4>
        </div>

        <div className="navbar">
          <div>
            <h4>
              <a href="/work" id="work">
                work
              </a>
            </h4>
          </div>
          <h4>
            <a href="/about" id="about">
              about
            </a>
          </h4>
          <h4>
            <a
              href="https://drive.google.com/file/d/1vXAjSAojqlUu8yTRlc57LJhYG0KNH-Xp/view?usp=sharing"
              target="_blank"
            >
              resumé
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Navbar;
