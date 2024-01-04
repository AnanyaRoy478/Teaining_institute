import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../HomePage/Navbar';

const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  

const ContactUs = () => {
    
    return (
        
        <>
        <Navbar/>
        {localStorage.getItem('token') ? (
        <div>
         <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='mb-2'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <footer style={{backgroundColor:"#5083be",textAlign:'center'}}>
        <Button onClick={moveToTop} style={{margin:'3px'}} >Move to Top</Button>
      </footer>
        </Container>
        </div> 
        ) : (
            <div>
              <h2>
                <p style={{ color: "red", textAlign: 'center' }}>LOGIN REQUIRED !</p>
              </h2>
            </div>
          )}
          </>
    );
}

export default ContactUs;

