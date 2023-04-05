import React from 'react'
import {Container,  Row, Col, Button } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col>
                        <Row className='text-center'><h3>Contact Us</h3></Row>
                        <Row className='text-center'><h6>GhaleAdvT</h6></Row>
                        <Row className='text-center'><h6>Thamel,Kathmandun,Nepal</h6></Row>
                        <Row><Button><h6>+9779860168038</h6></Button></Row>
                        <Row><Button><h6>GhaleAdvT@gmail.com</h6></Button></Row>
                    </Col>
                    <Col>
                    <Row className='text-center'><h3>Destination</h3></Row>
                    <Row><a class="btn btn-primary" role="button" aria-disabled="true"><h6>Langtang</h6></a></Row>
                    <Row><a class="btn btn-primary" role="button" aria-disabled="true"><h6>Evrest Base Camp</h6></a></Row>
                    <Row><a class="btn btn-primary" role="button" aria-disabled="true"><h6>Annupurna Base Camp</h6></a></Row>
                    </Col>
                </Row>
                <hr />
                <h6 className='text-center'>&copy;GhaleAdvT. All Right Reserved.</h6>
            </Container>
        </footer>
    )
}