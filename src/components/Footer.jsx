import React from 'react'
import {Container,  Row, Col, } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col>
                        <Row><h3>Contact Us</h3></Row>
                        <Row><h6>GhaleAdvT</h6></Row>
                        <Row><h6>Thamel,Kathmandun,Nepal</h6></Row>
                        <Row><h6>+9779860168038</h6></Row>
                        <Row><h6>GhaleAdvT@gmail.com</h6></Row>
                    </Col>
                    <Col>
                    <Row><h3>Destination</h3></Row>
                    <Row><h6>Langtang</h6></Row>
                    <Row><h6>Evrest Base Camp</h6></Row>
                    <Row><h6>Annupurna Base Camp</h6></Row>
                    </Col>
                </Row>
                <hr />
                <h6 className='text-center'>&copy;GhaleAdvT. All Right Reserved.</h6>
            </Container>
        </footer>
    )
}