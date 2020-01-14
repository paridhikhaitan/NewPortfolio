import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <h4>
                <a href="/">
                    Work
                </a>
                </h4>
                <h4>
                <a href="/About">
                    About
                </a>
                </h4>
                <h4>
                <a href="https://drive.google.com/file/d/1i72xvhBUXVjDaiB55MYfAmLUtWjAG5u-/view?usp=sharing">
                    Resumé
                </a>
                </h4>
            </div>
        );
    }
}

export default Navbar;