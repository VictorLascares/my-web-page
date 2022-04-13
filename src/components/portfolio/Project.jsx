import React from 'react'

const CardProject = ({name, tecnologies, image, code}) => {
  return (
    <div className='project col p-0'>
      <img className='img-fluid' src={image} alt="Imagen de Proyecto" />
      <div className="project__overlay text-light">
        <h3 className='fw-bold text-uppercase'>{name}</h3>
        <p className='text-uppercase'>{tecnologies}</p>
        <a className='btn btn-info' href={code} target="_blank">Code</a>
      </div>
    </div>
  )
}

export default CardProject