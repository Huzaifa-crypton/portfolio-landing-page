import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />

      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
