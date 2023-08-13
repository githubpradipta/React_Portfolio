import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'
import mainLogo from '../../assets/images/Main Logo.png'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
export default function SideBar() {
  const navref=useRef();
  const showNavBar = ()=>{
    navref.current.classList.toggle("responsiveNav");
  }
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={mainLogo} alt="Logo" srcSet="" />
      </Link>
      <nav ref={navref}>
        <NavLink exact="true" activeclassName="active" to='/' onClick={()=>showNavBar()}>
          <span class="material-symbols-outlined">home</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/about' onClick={()=>showNavBar()}>
        <span class="material-symbols-outlined">person</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/projects' onClick={()=>showNavBar()}>
        <span class="material-symbols-outlined">developer_mode_tv</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/contact' onClick={()=>showNavBar()}>
        <span class="material-symbols-outlined">mail</span>
        </NavLink>
        <button className='nav-btn nav-close-btn' onClick={()=>showNavBar()}>
          <CloseIcon/>
        </button>
      </nav>
      <button className='nav-btn' onClick={()=>showNavBar()}>
      <SegmentIcon/>
      </button>

    </div>
  )
}

