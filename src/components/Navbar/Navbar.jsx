import React, { useEffect, useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scroll > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
      <div className="navbar_content">
        <img
          className="navbar_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="navbar_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
