import React from 'react'
import { Link } from "react-router-dom";
import Project from './Project'
import './portfolio.css'

const Portfolio = () => {

  const projects = [
    {"id": "1","name": "Project 1", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project1.png", "code": "https://github.com/VictorLascares"},
    {"id": "2","name": "Project 2", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project2.png", "code": "https://github.com/VictorLascares"},
    {"id": "3","name": "Project 3", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project3.png", "code": "https://github.com/VictorLascares"},
  ]

  return (
    <section id='portfolio' className='py-3 vh-100'>
      <div className="container h-100 d-flex align-items-center">
        <div>
          <h2 className='text-center text-uppercase'>Portfolio</h2>
          <div className="projects p-3">
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
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className='btn btn-info text-uppercase' to="works">View More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio