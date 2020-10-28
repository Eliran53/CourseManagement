import React from "react";
import "../components/css/navbar1.css";
import { Link, useLocation } from "react-router-dom";
import Categories from "./Categories";
import Cookies from "js-cookie";
import axios from "axios";
import { urlBase } from "../utils/utils";
import { useState } from "react";
import { useEffect } from "react";
import '../components/css/Info.css'

export default function Navbar() {
  const location = useLocation();
  const [isShowBg, setShowGg] = React.useState(false);
  const [name, setName] = useState();
  // const check = null;
  React.useEffect(() => {
    if (
      ![
        "/contactUs",
        "/Login",
        "/Signup",
        "/api/queries/:id",
        "/add",
        "/music",
        "/credit-card",
        "/zone",
        'card'
      ].includes(location?.pathname)
    ) {
      checkPosition();
      document.addEventListener("scroll", checkPosition, false);
      return () => {
        document.removeEventListener("scroll", checkPosition, false);
      };
    } else {
      setShowGg(true);
    }
  }, [location.pathname]);

  const checkPosition = () => {
    setShowGg(window.pageYOffset > 100);
  };
  useEffect(() => {
    getToken();
  }, []);
  function getToken() {
    const test = Cookies.get("token");
    if (test) {
      const url = `${urlBase()}/api/auth/payload`;
      axios.get(url).then((res) => {
        console.log("test", res.data.data);
        setName(res.data.data.name);
      });
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${
        isShowBg ? "contactPage" : ""
      }`}
      id="mainNav"
    >
      <div className="container">
        <div className="navbar-brand js-scroll-trigger" href="#page-top">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <Categories />
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link js-scroll-trigger">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Preview" className="nav-link js-scroll-trigger">
                  preview
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/contactUs" className="nav-link js-scroll-trigger">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          {!name ? (
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                {" "}
                <Link to="/login" className="nav-link js-scroll-trigger">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/Signup" className="nav-link js-scroll-trigger">
                  Sign up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item"> hello ,{name}</li>
              <li className="nav-item">
                {" "}
                <Link to="/zone" className="nav-link js-scroll-trigger">
                  My Zone
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/logout" className="nav-link js-scroll-trigger">
                  logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
