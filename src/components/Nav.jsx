import React from "react";
import { useEffect } from "react";
import "./nav.css";
import { GrHome } from "react-icons/gr";
import { BsPersonCheck } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";

export default function Nav(props) {
  useEffect(() => {
    console.log(props.navToggle);
  }, [props.navToggle]);
  return (
    <>
      <div
        onClick={props.menuToggle}
        className={props.navToggle ? "nav-toggle-show" : "nav-toggle"}
      >
        <i className="icon-menu"></i>
      </div>
      <header
        className={props.navToggle ? "nav--container-show" : "nav--container"}
      >
        <img className="nav-logo" src="/logo.jpg" alt="Logo of a J" />
        <nav className="nav--menu">
          <ul>
            <li>
              {" "}
              <a href="">
                <i className="icon-home nav--icons"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="">
                <i className="icon-user-following nav--icons"></i>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="">
                <i className="icon-briefcase nav--icons"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="">
                <i className="icon-bubbles nav--icons"></i>{" "}
              </a>{" "}
            </li>

            <li
              className={
                props.navToggle ? "show-remove-hide" : "show-remove-icon"
              }
              onClick={props.menuToggle}
            >
              {" "}
              <i className="icon-close nav--icons"></i>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
