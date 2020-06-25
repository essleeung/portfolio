import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import blob from '../assets/contact-circle.svg';
import blob3 from '../assets/Weird Shape3.svg';
import blob2 from '../assets/contact-circle-green.svg';
import blob4 from '../assets/Weird Shape-green.svg';
import contact from '../assets/contact-top.png';
import TwitterContainer from './TwitterContainer.js';
import DraftsRounded from '@material-ui/icons/DraftsRounded';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';

import { Col, Container, Image, Row } from 'react-bootstrap';

const Contact = props => {
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null)
    const ref = useRef(null)

    const handleClick = (e) => {
        setShow(!show)
        setTarget(e.target)
    }

    return (
        <Container className="tp-3 max-vh">
            <Image src={contact} className="contact-blob" alt="decorative shapes"/>
            <h1>Feel that <strong>tingling</strong> in your fingertips?</h1>
            <p>That's the itch to click one of the links below and contact me.</p>
            <Container className="contact-links vertical-align tp-3">
                <Row className="tp-3 row-1">
                    <Col>
                        <Image src={blob2} className="animate" alt="spinning blob animation"/>
                        <Image src={blob4} className="animate2" alt="spinning blob animation"/>
                        <Image src={blob4} className="animate3" alt="spinning blob animation"/>
                        <div className="overlay" ref={ref}>
                            <Button className="text btn-link" variant="link" onClick={handleClick}><DraftsRounded /> Email</Button>
                            <Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Title as="h3">Email me at:</Popover.Title>
                                    <Popover.Content>
                                        <strong>essleeung@gmail.com</strong>
                                    </Popover.Content>
                                </Popover>
                            </Overlay>
                        </div>
                    </Col>
                    <Col>
                        <Image src={blob} className="animate" alt="spinning blob animation"/>
                        <Image src={blob3} className="animate2" alt="spinning blob animation"/>
                        <Image src={blob3} className="animate3" alt="spinning blob animation"/>
                        <div className="overlay">
                            <a href="https://twitter.com/sharonsmlee" target="_blank" rel="noopener noreferrer" className="text"><Twitter /> Twitter</a>
                        </div>
                    </Col>
                    <Col>
                        <TwitterContainer />
                    </Col>
                </Row>
                <Row className="row-2">
                    <Col>
                        <Image src={blob} className="animate" alt="spinning blob animation"/>
                        <Image src={blob3} className="animate2" alt="spinning blob animation"/>
                        <Image src={blob3} className="animate3" alt="spinning blob animation"/>
                        <div className="overlay">
                            <a href="https://www.linkedin.com/in/sharonl1/" target="_blank" rel="noopener noreferrer" className="text"><LinkedIn /> LinkedIn</a>
                        </div>
                    </Col>
                    <Col>
                        <Image src={blob2} className="animate" alt="spinning blob animation"/>
                        <Image src={blob4} className="animate2" alt="spinning blob animation"/>
                        <Image src={blob4} className="animate3" alt="spinning blob animation"/>
                        <div className="overlay">
                            <a href="https://github.com/essleeung" target="_blank" rel="noopener noreferrer" className="text"><GitHub /> GitHub</a>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Contact