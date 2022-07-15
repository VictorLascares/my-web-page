import React from 'react'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
      
  )
}

export default Home