import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import pdf from '../assets/sharon_lee_resume.pdf'

const SocialMedia = props => {
    return (
        <div className="social">
            <div><a href="https://www.linkedin.com/in/sharonl1/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon-social" icon={faLinkedin} /></a></div>
            <div><a href="https://github.com/essleeung" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon-social" icon={faGithub} /></a></div>
            <div><a href="https://codepen.io/essleeung" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon-social" icon={faCodepen} /></a></div>
            <div><a href="https://twitter.com/SharonsmLee" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon-social" icon={faTwitter} /></a></div>
            <div><a href={pdf} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /></a></div>
        </div>
    )
}

export default SocialMedia