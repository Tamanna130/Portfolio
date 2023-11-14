import React from 'react'
import { Container } from 'react-bootstrap'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

export default function Home() {
  return (
    <div>
        <Container className='mt-5 pt-5'>
            <div className=' row '>
                <h1 className='p-2 col d-flex justify-content-center'>Tamanna shermin</h1>
            </div>
            <div className='row '>
                <h5 className='p-2 col d-flex justify-content-center'>React Developer</h5>
            </div>
        </Container>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}
