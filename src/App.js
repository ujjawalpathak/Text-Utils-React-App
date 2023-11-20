
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" homepage="Home" aboutpage="About"/>
      <TextForm/>
    </>
  );
}

export default App;
