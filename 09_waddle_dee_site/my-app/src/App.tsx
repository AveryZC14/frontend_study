import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <header className='main-header'>
      <h1 className='site-title'>Waddle Dee Site</h1>
      <nav className='site-nav'>
        <ul className='nav-list'>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="google.com" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="google.com" className="nav-link">Waddle Dees</a>
          </li>
          <li className="nav-item">
            <a href="google.com" className="nav-link">Deeterbase</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className='main-app'>
      <div className="section">
        lkjasdf
      </div>
      <div className="section">

      </div>
      <div className="section">

      </div>
    </main>
    <footer>
      <h2>
        links
      </h2>
      <ul>
        <li className="footer_li"><a href="https://google.com" className="footer_a">me</a></li>
        <li className="footer_li"><a href="https://google.com" className="footer_a">a</a></li>
        <li className="footer_li"><a href="https://google.com" className="footer_a">b</a></li>
        <li className="footer_li"><a href="https://google.com" className="footer_a">c</a></li>
      </ul>
    </footer>
    </>
  );
}

export default App;
