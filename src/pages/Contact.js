import React from 'react';
import TwitterContainer from './TwitterContainer.js';
import ContactForm from './ContactForm.js'

import { Col, Container, Row } from 'react-bootstrap';

const Contact = props => {

    return (
        <Container className="tp-3 max-vh">
            <div className="wave"></div>
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
            </Container >

        </Container >
    )
}

export default Contact