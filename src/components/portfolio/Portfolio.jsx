import React from 'react'
import Project from './Project'
import './portfolio.css'

const Portfolio = () => {

  const projects = [
    {"id": "1","name": "Project 1", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project1.png", "code": "https://github.com/VictorLascares"},
    {"id": "2","name": "Project 2", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project2.png", "code": "https://github.com/VictorLascares"},
    {"id": "3","name": "Project 3", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project3.png", "code": "https://github.com/VictorLascares"},
    {"id": "4","name": "Project 4", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project1.png", "code": "https://github.com/VictorLascares"},
    {"id": "5","name": "Project 5", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project2.png", "code": "https://github.com/VictorLascares"},
    {"id": "6","name": "Project 6", "tecnologies": "Html - Css - Javascript", "image": "/src/assets/img/project3.png", "code": "https://github.com/VictorLascares"}
  ]

  return (
    <section id='portfolio' className='py-3'>
      <div className="container">
        <h2 className='text-center text-uppercase'>Portfolio</h2>
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
      </div>
    </section>
  )
}

export default Portfolio