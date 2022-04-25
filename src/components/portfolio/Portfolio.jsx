import React from 'react'
import Img1 from '/src/assets/img/project1.png'
import Img2 from '/src/assets/img/project2.png'
import Img3 from '/src/assets/img/project3.png'
import Project from './Project'
import './portfolio.css'

const Portfolio = () => {

  const projects = [
    {"id": "1","name": "Project 1", "tecnologies": "Html - Css - Javascript", "image": Img1, "code": "https://github.com/VictorLascares"},
    {"id": "2","name": "Project 2", "tecnologies": "Html - Css - Javascript", "image": Img2, "code": "https://github.com/VictorLascares"},
    {"id": "3","name": "Project 3", "tecnologies": "Html - Css - Javascript", "image": Img3, "code": "https://github.com/VictorLascares"},
  ]

  return (
    <section id='portfolio' className='py-5 my-5'>
      <div className="container-fluid d-flex align-items-center h-100">
        <div className='w-100'>
          <h2 className='text-center text-uppercase mb-3'>Portfolio</h2>
          <div className="projects">
            {
              projects.map(project => {
                return(
                  <Project
                    key={project.id} 
                    name={project.name}
                    tecnologies={project.tecnologies}
                    image={project.image}
                    code={project.code}
                  />
                )
              })
            }
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <a className='btn btn-dark text-info text-uppercase rounded-0' href="https://github.com/VictorLascares" target="_blank">View More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio