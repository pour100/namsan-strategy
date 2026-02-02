import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import Analysis from './components/Analysis'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Services />
      <Analysis />
      <Footer />
    </div>
  )
}

export default App
