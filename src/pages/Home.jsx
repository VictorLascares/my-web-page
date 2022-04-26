import React from 'react'
import Navbar from '../components/nav/Navbar'
import Cover from '../components/cover/Cover'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {

  const darkMode = (e) => {
    const darkModebtn = e.target
    if (darkModebtn.classList.contains('bi-moon')) {
      darkModebtn.classList.remove('bi-moon')
      darkModebtn.classList.add('bi-sun')
    } else {
      darkModebtn.classList.remove('bi-sun')
      darkModebtn.classList.add('bi-moon')
    }
  }

  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <button
        type='button'
        className="dark-mode-btn dark-mode btn btn-dark text-info bi bi-moon"
        onClick={darkMode}
      >
      </button>
    </>
      
  )
}

export default Home