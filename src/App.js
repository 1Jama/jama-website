import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Section from './section';
import About from './About';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Section />

        <About />
      </div>
    </>
  );
}

export default App;
