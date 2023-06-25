import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Navbar/>
    
    </>
    
  );
}

export default App;
