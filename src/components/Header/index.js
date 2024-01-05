import React from 'react';
import "./style.css";

function Header() {
  return (
    <div className='header-wrapper'>
        <p className='logo'>Financely.</p>
        <p className="logout">Logout</p>
    </div>
  )
}

export default Header;