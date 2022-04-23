import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer className='bg-dark'>
      <div className="container py-3 d-md-flex justify-content-between align-items-center">
        <p className='text-light m-0 text-uppercase text-center'>Designed and Development by Victor Lascares 2022 &copy;</p>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <a className='text-light' href="https://github.com/VictorLascares" target='_blank'>
            <i className="bi bi-github link" style={{fontSize: '2rem'}}></i>
          </a>
          <a className='text-light' href="https://www.linkedin.com/in/victorlascares/" target='_blank'>
            <i className='bi bi-linkedin link' style={{fontSize: '2rem'}}></i>
          </a>
          <a className='text-light' href="https://twitter.com/victor_lascares" target='_blank'>
            <i className='bi bi-twitter link' style={{fontSize: '2rem'}}></i>
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer