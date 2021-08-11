import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  )
}
export default App;
