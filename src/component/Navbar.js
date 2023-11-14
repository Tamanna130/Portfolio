import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
  return (
    <>
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                
                <Nav className="ms-auto">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Resume">Resume</Nav.Link>
                <Nav.Link href="#Blogs">Blogs</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
   
  )
}
