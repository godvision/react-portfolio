import React from "react";
import Data from "./Data";
import "./home.css";

export default function Home(props) {
  return (
    <>
      <div className="home--content">
        <Data darkMode={props.darkmode} />
      </div>
    </>
  );
}
