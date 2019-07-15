import React from 'react'
import "./card.css"

// deconstructed props
const Navbar = ({ icon, title, score }) => {
    return (
      <div>
      <nav className='navbar bg-danger'>
        <div className="container">
          <h1>
            <i className={icon} /> {title}
          </h1>
          <h3 className="itemRight">Score: {score}</h3>
        </div>
      </nav>
        <h5 className="textcolor">This is a memory game. Click each picture only once to win!</h5>
      </div>
    )
  }
// default props for navbar items in case props don't exist
Navbar.defaultProps = {
  title: "Keanu's Clicky Game!",
  icon: "fas fa-mouse-pointer",
  score: 0,
};


export default Navbar