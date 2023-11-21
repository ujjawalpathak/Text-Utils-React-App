
import './App.css';
// import About from './components/About ';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {

  const [displayMode, setDisplayMode] = useState('light');

  const toggleMode = ()=>{
    if(displayMode === "light"){
      setDisplayMode("dark");
      document.body.style.backgroundColor = "#042743";
    }else{
      setDisplayMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" displayMode={displayMode} toggleMode={toggleMode} homepage="Home" aboutpage="About"/>
      <div className='container my-3'>
      <TextForm heading="Enter Your Text Below" displayMode={displayMode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
