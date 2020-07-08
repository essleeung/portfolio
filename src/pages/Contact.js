import React from 'react';
import blob from '../assets/contact-circle.svg';
import blob3 from '../assets/Weird Shape3.svg';
import blob2 from '../assets/contact-circle-green.svg';
import blob4 from '../assets/Weird Shape-green.svg';
import contact from '../assets/contact-top.png';
import TwitterContainer from './TwitterContainer.js';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import ContactForm from './ContactForm.js'

import { Col, Container, Image, Row } from 'react-bootstrap';

const Contact = props => {

    return (
        <Container className="tp-3 max-vh">
            <Image src={contact} className="contact-blob" alt="decorative shapes" />
            <h1>Feel that <strong>tingling</strong> in your fingertips?</h1>
            <p>That's the itch to drop me a note via the form below <em>[essleeung@gmail.com]</em> or check out one of the other links.</p>
            <Container className="contact-links vertical-align">
                <Row className="tp-3">
                    <Col xl={8} md={6} xs={12} className="mobile">
                        <ContactForm />
                        <Row>
                            <Col>
                                <Image src={blob} className="animate" alt="spinning blob animation" />
                                <Image src={blob3} className="animate2" alt="spinning blob animation" />
                                <Image src={blob3} className="animate3" alt="spinning blob animation" />
                                <div className="overlay">
                                    <a href="https://www.linkedin.com/in/sharonl1/" target="_blank" rel="noopener noreferrer" className="text"><LinkedIn /> LinkedIn</a>
                                </div>
                            </Col>
                            <Col>
                                <Image src={blob2} className="animate" alt="spinning blob animation" />
                                <Image src={blob4} className="animate2" alt="spinning blob animation" />
                                <Image src={blob4} className="animate3" alt="spinning blob animation" />
                                <div className="overlay">
                                    <a href="https://github.com/essleeung" target="_blank" rel="noopener noreferrer" className="text"><GitHub /> GitHub</a>
                                </div>
                            </Col>
                        </Row>
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