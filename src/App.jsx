import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Packages from './components/Packages';
import Newsletter from './components/Newsletter';
import Register from './components/Register';
import GlobalStyles from './styles/GlobalStyles';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.background}>
      <GlobalStyles  />
      <Router>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

