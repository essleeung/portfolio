import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image  from 'react-bootstrap/Image';
import about from '../assets/about-blob.png'
import GetApp from '@material-ui/icons/GetApp';
import Visibility from '@material-ui/icons/Visibility';
import pdf from '../assets/sharon_lee_resume.pdf'


const About = props => {
    return (
        <Container className="tp-3 max-vh">
            <div className="abt-wrapper">
            <Image src={about} className="abt-img" alt="decorative shapes"/>
            <h1 className="abt-text">About</h1>
            </div>
            <div className="about">
                <p>I’m a detailed-oriented <span className="purple">full stack developer</span>  transitioning from a health IT/business focus. Over the years, I’ve worn many different hats as a project manager, business consultant and implementation engineer. Working in clinical settings has shown me how poorly implemented/designed software can hinder the day-to-day operations of staff, as well as patient safety. These experiences have given me a glimpse of the importance of <span className="mint">user-centric design</span>, as well as sparking a passion for tackling large-scale complex problems with simple and scalable solutions. Other key takeaways from my past experiences- <span className="orange">empathy for all cross-functional domains</span>, a team-focused and transparent communication style, as well as the ability to thrive and <span className="purple">adapt in resource-strapped environments</span>. I’m excited for deeper involvement in building applications that are efficient, functional and user-friendly.</p>
            </div>
            <div className="tech">
                <h3>Technical Skills</h3>
                <Table responsive>
                    <tr>
                        <td>Agile/Scrum</td>
                        <td>Bootstrap</td>
                        <td>CSS</td>
                        <td>EJS</td>
                        <td>Express</td>
                        <td>HTML</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>Materialize</td>
                        <td>MongoDB(NoSQL)</td>
                        <td>Mongoose(ODM)</td>
                        <td>Node.js</td>
                        <td>PostgresSQL</td>
                        <td>Python</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>Sass</td>
                        <td>Semantic UI</td>
                        <td>Sequelize(ORM)</td>
                        <td>Socket.io</td>
                        <td>SQL</td>
                        <td>Typescript</td>
                        <td>XML</td>
                    </tr>
                </Table>
            </div>
            <div className="resume">
            <h3>Resume</h3>
                <a href={pdf} target="_blank" rel="noopener noreferrer"><Visibility />View    </a><a href={pdf} target="_blank" rel="noopener noreferrer" download><GetApp />Download</a>
            </div>
        </Container>
    )
}

export default About