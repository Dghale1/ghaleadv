import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Input from '../components/Input'

export default function Home() {
  return (
    <main>
    <Container className='mb-4, mt-4'>
    <div>  
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Input
              type={'text'} 
              name={'search'}
              placeholder={'Search'}
              classes={'mb-4 col-12 form-control'}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button className='col-12'>Search</Button>
        </Col> 
      </Row>
    </Form>
    </div>
    </Container>
    /</main>
  )
}
