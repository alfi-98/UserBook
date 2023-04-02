import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from "react";
import './../../styles/header.css';
import { Link } from 'react-router-dom';

function Header()  {
  const navRef = useRef();
  const showHeader = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return(
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
      <Link to="/about">About</Link>
      <Link to="/">List</Link>
      <Link to="/settings">Settings</Link>
        <button className="nav-btn nav-close-btn" onClick={showHeader}>
          <FaTimes/>
        </button>
      </nav>
      <button  className="nav-btn nav-menu-btn"  onClick={showHeader}>
        <FaBars/>
      </button>
     </header>
  )
}

export default Header;