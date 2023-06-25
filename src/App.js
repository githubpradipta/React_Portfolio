import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
    
  );
}

export default App;
