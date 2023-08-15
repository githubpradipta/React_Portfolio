import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Oneproject from './Components/Oneproject/Oneproject';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';

function App() {
  const[projectDetails,setProjectDetails]=useState({title:"",shortDesc:"",Desc:"",tech:[],githubLink:"",imgLink:""});
  const projectHandler = (projectData) =>{
    setProjectDetails({...projectDetails,title:projectData.title,shortDesc:projectData.shortDesc,Desc:projectData.Desc,tech:projectData.tech,githubLink:projectData.githubLink,imgLink:projectData.imgLink});
  }
  return (
    <>
    <Layout/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Project projectHandler={projectHandler}/>}/>
      <Route path='/project/:projectID' element={<Oneproject/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
    
  );
}

export default App;
