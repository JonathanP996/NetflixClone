import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileImg from '../../assets/profile_img.png'
import CaretIcon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt=""></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={SearchIcon} alt='' className='icons'></img>
        <p>Children</p>
        <img src={BellIcon} alt='' className='icons'></img>
        <div className="nav-profile">
          <img src={ProfileImg} alt='' className='profile'></img>
          <img src={CaretIcon} alt='' className='profile' id="caret"></img>
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
