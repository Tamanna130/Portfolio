import React from 'react'
import Image from 'react-bootstrap/Image';
import ProfilePic from '../../img/ProfilePic.jpeg'
export default function About() {
  return (
    <div className='container mt-5 ' style={{width: '70%'}}>
        <div className='row '>
            <div className='col-4 d-flex justify-content-center'>
                <Image width={200} height={220}src={ProfilePic}/>
            </div>
                <div className='col-8'>
                <div className=' row '>
                    <h2 className=' col '>About Me</h2>
                </div>
                <div className='row '>
                    <p className='col p-2'> I am a software developer who enjoys turning complex problems into simple innovative solutions. I have experience developing web and mobile applications using both front-end and backend technologies.Technically, I am proficient in React, React Native, Redux, Angular, Python, Django, C#, Java, SQL, ASP.NET MVC/Web API 
                    and Microsoft Azure. For more details, please check my professional profile at LinkedIn and the personal projects.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
