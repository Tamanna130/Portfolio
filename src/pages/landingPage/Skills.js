import React from 'react'
import { Container } from 'react-bootstrap'
export default function Skills() {
  return (
    <div>
      <Container className='mt-5 'style={{width: '70%'}}>
            <div className=' row '>
                <h2 className='p-2 col d-flex justify-content-center'>Technical Skills</h2>
            </div>
            <div className='row '>
                
                <div className='p-2 col d-flex justify-content-center'>
                  <ul className='p-2 '>
                    <li>
                    Front-end: React, React Native, Redux, Angular, JavaScript, D3.js, jQuery, HTML, CSS3, Bootstrap, Semantic UI shahsjah sahsaj
                    </li>
                    <li>
                    Back-end: Python, Django, Java, C#, ASP.NET MVC , Web API, Node.js, Express.js
                    </li>
                    <li>
                    Databases: MS SQL Server and MongoDB.
                    </li>
                    <li>
                    Deployment and development tools: GIT, Microsoft Azure Devops, Heroku, MongoLab and GitHub, Source Tree.

                    </li>
                  </ul>
                </div>
                
            </div>
        </Container>
    </div>
  )
}
