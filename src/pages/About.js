import React from 'react';
import {Container} from 'react-bootstrap'

const About = props => {
    return (
        <Container className="">
            <h1>About Me</h1>
            <img src={props.img} alt="profile"/>
            <h3>Hi, my name is {props.name}</h3>
            <p>{props.content}</p>
        </Container>
    )
}

export default About