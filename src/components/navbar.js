import React from "react";

class Navbar extends React.Component {
  componentDidMount() {
    if (this.props.fromPage === "home") {
      document.getElementById("home").style.display = "none";
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
          <h4>
            <a href="/"> {"<  "}home</a>
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
              résumé
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Navbar;
