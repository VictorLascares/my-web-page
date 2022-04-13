import React from 'react'
import Navbar from '../components/nav/Navbar'
import Cover from '../components/cover/Cover'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'

const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Portfolio />
    </>
      
  )
}

export default Home