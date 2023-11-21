
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About ';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {

  const [displayMode, setDisplayMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout( ()=> {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(displayMode === "light"){
      setDisplayMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled.", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "Dark Mode Enabled";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 2000);
    }else{
      setDisplayMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled.", "success");
      document.title = "TextUtils - Light Mode";  

    }
  }

  return (
    <>
      <Navbar title="TextUtilss" displayMode={displayMode} toggleMode={toggleMode} homepage="Home" aboutpage="About"/>
      <Alerts alert={alert}/>
      <div className='container my-3'>
      <TextForm heading="Enter Your Text Below" displayMode={displayMode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
