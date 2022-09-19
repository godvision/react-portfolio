import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./data.css";

export default function Data(props) {
  console.log("test");
  return (
    <>
      <div className="data--container">
        <div className="blob"></div>
        <div className="data--row">
          <h1 className={props.darkMode ? "data--title-dark" : "data--title"}>
            Jesse van der Veer
          </h1>

          <h2
            className={
              props.darkMode ? "data--developer-dark" : "data--developer"
            }
          >
            Front-End developer
          </h2>
          <p className={props.darkMode ? "data--text-dark" : "data--text"}>
            High level experience in web design and development
          </p>
          <p className={props.darkMode ? "data--text-dark" : "data--text"}>
            knowledge, producing quality work.
          </p>
          <a
            href=""
            className={props.darkMode ? "data--button-dark" : "data--button"}
          >
            Say Hello!<i className="icon-paper-plane "></i>
          </a>
        </div>
        <div className="data--mouse-container">
          <div className="data--mouse-scroll"></div>
          <p className="data--scroll-down-text">Scroll down</p>
          <AiOutlineArrowDown className="data--arrow-down" />
        </div>
        <div className="data--mouse-wheel"></div>
      </div>
    </>
  );
}
