import React from 'react'
import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </>

  )
}

export default App
