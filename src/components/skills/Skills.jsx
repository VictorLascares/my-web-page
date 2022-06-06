import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className="container">
      <h2 className='text-uppercase text-center'>Skills</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators mb-0">
          <button type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"></button>

          <button type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className='bg-dark'
            aria-label="Slide 2"></button>

          <button type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className='bg-dark'
            aria-label="Slide 3"></button>

          <button type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            className='bg-dark'
            aria-label="Slide 4"></button>

          <button type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            className='bg-dark'
            aria-label="Slide 5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active py-5" data-bs-interval="3000">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 icon icon-tabler icon-tabler-brand-html5" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            <p className='text-center mt-2 text-uppercase fw-bold'>html</p>
          </div>
          <div className="carousel-item py-5" data-bs-interval="3000">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 icon icon-tabler icon-tabler-brand-css3" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            <p className='text-center mt-2 text-uppercase fw-bold'>css</p>
          </div>
          <div className="carousel-item py-5" data-bs-interval="3000">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 icon icon-tabler icon-tabler-brand-javascript" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <p className='text-center mt-2 text-uppercase fw-bold'>Javascript</p>
          </div>
          <div className="carousel-item py-5" data-bs-interval="3000">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 icon icon-tabler icon-tabler-brand-sass" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
            </svg>
            <p className='text-center mt-2 text-uppercase fw-bold'>Sass</p>
          </div>
          <div className="carousel-item py-5" data-bs-interval="3000">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 icon icon-tabler icon-tabler-brand-react-native" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
            </svg>
            <p className='text-center mt-2 text-uppercase fw-bold'>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills