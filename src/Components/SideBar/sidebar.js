import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'
import mainLogo from '../../assets/images/Main Logo.png'
export default function SideBar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={mainLogo} alt="Logo" srcSet="" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassName="active" to='/'>
          <span class="material-symbols-outlined">home</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/about'>
        <span class="material-symbols-outlined">person</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/projects'>
        <span class="material-symbols-outlined">developer_mode_tv</span>
        </NavLink>
        <NavLink exact="true" activeclassName="active" to='/contact'>
        <span class="material-symbols-outlined">mail</span>
        </NavLink>
      </nav>
    </div>
  )
}

