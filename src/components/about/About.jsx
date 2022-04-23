import React from 'react'
import Profile from '/src/assets/img/profile.png'

const About = () => {
  return (
    <section id='about' className='py-5 mb-5' style={{ background: '#F4F4F4' }}>
        <div className="container-sm h-100 d-flex align-items-center">
          <div>
            <div className="row">
              <div className="col-12">
                <h2 className=' text-center text-uppercase mb-3'>About Me</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-4 text-center">
                <img className='img-fluid' src={Profile} alt="Imagen de Perfil" width={'250px'} />
              </div>
              <div className="col-sm-8 ">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid quidem asperiores, maiores eligendi eius? Voluptatibus debitis assumenda harum autem facere cum maiores quae, consectetur dolores ipsum quis fuga odit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti distinctio non dolor quam, unde sint adipisci consequuntur, ipsa nemo, inventore temporibus nesciunt possimus. Rem excepturi quibusdam labore officia voluptatum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About