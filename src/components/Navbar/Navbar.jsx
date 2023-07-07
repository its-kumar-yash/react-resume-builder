import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            ResumeXpert
            {/* <FontAwesomeIcon icon={Icons.fax} size="6px" /> */}
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.overleaf.com/latex/templates"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Templates
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/its-kumar-yash"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
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
