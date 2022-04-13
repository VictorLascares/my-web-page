import React from 'react'
import Avatar from '/src/assets/img/myAvatar.png'

const Cover = () => {
  return (
    <div className="row g-0">
      <div className="col-md-6 d-flex align-items-center">
        <div className="card-body d-flex flex-column align-items-center">
          <h1 className="card-title d-flex flex-column text-uppercase h3">My Name is <span className='h1 fw-bold'>Victor Lascares</span></h1>
          <p className="card-text bg-info  d-inline p-2 text-uppercase h4">I'm Web Developer</p>
        </div>
      </div>
      <div className="col-md-5">
        <img src={Avatar} className="img-fluid rounded-start" alt="Avatar" />
      </div>
    </div>
  )
}

export default Cover