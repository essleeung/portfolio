import React from 'react';
import Container from 'react-bootstrap/Container';
import Image  from 'react-bootstrap/Image';
import plants from '../assets/plants@2x.png'
import GetApp from '@material-ui/icons/GetApp';
import Visibility from '@material-ui/icons/Visibility';
import pdf from '../assets/sharon_lee_resume.pdf'


const Resume = props => {
    return (
        <Container className="tp-3">
            <h1>Resume</h1>
            <div className="resume">
                <a href={pdf} target="_blank" rel="noopener noreferrer"><Visibility /> View</a>
                <br/>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download><GetApp /> Download</a>
            </div>
            <Image src={plants} className="plants"/>
        </Container>
    )
}

export default Resume