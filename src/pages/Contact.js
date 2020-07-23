import React from 'react';
import TwitterContainer from './TwitterContainer.js';
import ContactForm from './ContactForm.js'

import { Col, Container, Row } from 'react-bootstrap';

const Contact = props => {

    return (
        <div>
            <div className="waves">
                <svg id="wave-svg" width="100%" height="400px" fill="none" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#8C52FF" />
                        <stop offset="50%" stop-color="#76CCCF" />
                        <stop offset="100%" stop-color="#8C52FF" />
                    </linearGradient>
                    <path
                        fill="url(#grad1)"
                        d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
        
          V 359 
          H 0 
          V 67
          Z">
                        <animate
                            repeatCount="indefinite"
                            fill="url(#grad1)"
                            attributeName="d"
                            dur="15s"
                            attributeType="XML"
                            values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            ">
                        </animate>
                    </path>
                </svg>
            </div>



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
        </div >
    )
}

export default Contact