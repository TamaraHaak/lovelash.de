import React from 'react';
import styles from './index.module.css';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <p>&copy; 2024 Lovelash.de.  Alle Rechte vorbehalten.</p>
      <p>Impressum</p>
      <p>Datenschutz</p>
    </footer>
  );
}

export default Footer;

