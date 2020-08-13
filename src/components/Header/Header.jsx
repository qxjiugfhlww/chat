import React from 'react';
import logo from './../../img/logo.svg';
import header from './Header.module.css';

function Header() {
  return (
    <header className={header.body}>
      <img src={logo} className={header.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className={header.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  );
}

export default Header;
