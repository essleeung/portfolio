import React from 'react';
import TwitterContainer from './TwitterContainer.js';
import ContactForm from './ContactForm.js'

import { Col, Container, Row } from 'react-bootstrap';

const Contact = props => {

    return (
        <div className="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 450" >
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#8C52FF" />
                    <stop offset="50%" stop-color="#76CCCF" />
                    <stop offset="100%" stop-color="#8C52FF" />
                </linearGradient>
                <path fill="url(#grad1)" fill-opacity="0.7" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,181.3C672,139,768,85,864,96C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
            <Container className="max-vh contact-container">
                <h1>Feel that <strong>tingling</strong> in your fingertips?</h1>
                <p>That's the itch to drop me a note via the form below or directly at <em>essleeung[at]gmail.com</em>.</p>
                <p>Can't wait to hear from you!</p>
                <Container className="contact-links vertical-align">
                    <Row className="tp-3">
                        <Col xl={8} md={6} xs={12} className="mobile">
                            <ContactForm />
                        </Col>
                        <Col xl={4} md={6} xs={12}>
                            <TwitterContainer />
                        </Col>
                    </Row>
                </Container>
            </Container >
        </div>
    )
}

export default Contact