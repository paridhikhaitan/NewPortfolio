import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <h4>
            <a href="/">work</a>
          </h4>
        </div>
        <h4>
          <a href="/about">about</a>
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
    );
  }
}

export default Navbar;
