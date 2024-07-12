import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Header() {

 
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.logo}>Lovelash.de</h1>
      <nav className={styles.nav}>
        <Link to="/">HAUPT MENU</Link>
        <Link to="/about">ÜBER MICH</Link>
        <Link to="/packages">PAKET</Link>
        <Link to="/newsletter">NEWSLETTER</Link>
        <Link to="/register">ANMELDUNG</Link>
      </nav>
    </header>
  );
}

export default Header;


