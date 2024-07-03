import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.logo}>Lovelash.de</h1>
      <nav className={styles.nav}>
        <Link to="/">Haupt Menu</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/packages">Paket</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/register">Anmeldung</Link>
      </nav>
    </header>
  );
}

export default Header;


