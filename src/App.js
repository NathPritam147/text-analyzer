import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Display alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // toggle light and dark mode and display alert
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#061019";
      // showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
