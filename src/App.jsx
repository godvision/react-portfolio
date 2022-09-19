import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Home from "./components/Home.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  function menuToggle() {
    console.log(navToggle);
    setNavToggle((prevMode) => !prevMode);
  }
  return (
    <div className={darkMode ? "body-dark" : "body"}>
      <Nav navToggle={navToggle} menuToggle={menuToggle} />
      <Home />
    </div>
  );
}

export default App;
