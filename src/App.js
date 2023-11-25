
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About ';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [displayMode, setDisplayMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (displayMode === "light") {
      setDisplayMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled.", "success");
    } else {
      setDisplayMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled.", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" displayMode={displayMode} toggleMode={toggleMode} homepage="Home" aboutpage="About" />
        <Alerts alert={alert} />
        <div className='container my-3'>
          <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Your Text Below" displayMode={displayMode} />} />
          <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

