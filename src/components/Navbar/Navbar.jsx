import React, { useState } from "react";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as Icons from "@fortawesome/fontawesome-free-solid"


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a exact to="/" className="nav-logo">
            ResumeXplorer
            {/* <FontAwesomeIcon icon={Icons.fax} size="6px" /> */}
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Templates
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? Icons.faTimes : Icons.faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
