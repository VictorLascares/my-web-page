import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Avatar from '/src/assets/img/myAvatar.png'

const Cover = () => {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web Developer"],
      typeSpeed: 200,
      backSpeed: 0,
      backDelay: 500,
      startDelay: 1000,
      loop: true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <div className="row g-0">
      <div className="col-md-6 d-flex align-items-center">
        <div className="card-body d-flex flex-column align-items-center">
          <h1 className="card-title d-flex flex-column text-uppercase h3">HI There I'm <span className='h1 fw-bold'>Victor Lascares</span></h1>
          <div className='bg-info p-2 h4'>
            <p ref={el} className="card-text d-inline text-uppercase "></p>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <img src={Avatar} className="img-fluid rounded-start" alt="Avatar" />
      </div>
    </div>
  )
}

export default Cover