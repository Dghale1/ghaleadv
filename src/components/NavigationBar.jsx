import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <div className='costume-nav'>
            <Navbar className='bg-dark' expand="lg">
                <Container>
                    <Navbar.Brand>GhaleAdvT</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About Us</Nav.Link>
                        <Nav.Link href='/trek'>Trek</Nav.Link>
                        <Nav.Link href='/contact'>Contact Us</Nav.Link>
                        <Nav.Link href='/gallery'>Gallery</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}