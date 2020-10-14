import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Dropdown from "./Dropdown";
// import LoginButton from "./loginbtn";
// import LogoutButton from "./logoutbtn";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Logo
          {/* <i class="fab fa-firstdraft" /> */}
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Categories <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
        {/* <LoginButton/>
        <LogoutButton/> */}
        <Button />
        <Link to="/Login" className="Login" onClick={closeMobileMenu}>
          Login
        </Link>
        <Link to="/Register" className="Login" onClick={closeMobileMenu}>
          Register
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
