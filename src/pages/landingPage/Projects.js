import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Screenshot_1 from '../../img/Screenshot_1.png'
export default function Projects() {
  return (
    <div>
      <Container className='mt-5  'style={{width: '70%'}}>
            <div className=' row '>
                <h2 className='p-2 col d-flex justify-content-center'>Projects</h2>
            </div>
            <div className='row'>
                <div className='col-sm-4 p-2 d-flex justify-content-end'>
                <Image width={300} height={220}src={Screenshot_1}/>    
                </div>
                <div className='col-sm-4 p-2 d-flex justify-content-end'>
                <div>
                <Image width={300} height={220}src={Screenshot_1}/> 
                <p className=' mt-3 col d-flex justify-content-center'>Todo App</p>
                <p className=' col d-flex justify-content-center'>Read More</p>
                <p className=' col d-flex justify-content-center'>GitHub</p>  
                </div>  
                </div>
                <div className='col-sm-4 p-2 d-flex justify-content-end'>
                <Image width={300} height={220}src={Screenshot_1}/>    
                </div>
                <div className='col-sm-4 p-2 d-flex justify-content-end'>
                <Image width={300} height={220}src={Screenshot_1}/>    
                </div>
            </div>
                
            
        </Container>
    </div>
  )
}
