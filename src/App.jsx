import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import About from './pages/About'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Styles from './pages/Styles'

function App() {

  return (
    <div>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/styles" element={<Styles />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
