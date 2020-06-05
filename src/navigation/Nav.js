import {Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';

const NavBottom = props => {
    return (
        <Container>
            <Navbar fixed="bottom" bg="light">
            <Nav justify activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        </Container>
    )
}

export default NavBottom