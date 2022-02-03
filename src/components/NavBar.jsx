import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <>
      <div className="bg-menus" />
      <Link to="/" className="link">
        <div className="logo">
          <h1>home</h1>
        </div>
      </Link>
      <Menu>
        <Link to="/category/5" className="link">
          <a id="about" className="menu-item" href="/Motions">
            Motions
          </a>
        </Link>
        <Link to="/category/1" className="link">
          <a id="contact" className="menu-item" href="/Editions">
            Éditions
          </a>
        </Link>
        <Link to="/category/2" className="link">
          <a className="menu-item--small" href="/Identite">
            Identitées
          </a>
        </Link>
        <Link to="/category/3" className="link">
          <a className="menu-item--small" href="/Interface">
            Interfaces
          </a>
        </Link>
        <Link to="/category/4" className="link">
          <a className="menu-item--small" href="/Typographie">
            Typographie
          </a>
        </Link>
        <Link to="/about" className="link">
          <a className="menu-item--small" href="/Typographie">
            About
          </a>
        </Link>
      </Menu>
    </>
  );
};

export default NavBar;
