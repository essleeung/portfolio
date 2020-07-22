import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import about from '../assets/about-blob.png'
import pdf from '../assets/sharon_lee_resume.pdf'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = props => {
    return (
        <Container className="tp-3">
            <div className="abt-wrapper">
                <Image src={about} className="abt-img" alt="decorative shapes" />
                <h1 className="abt-text">About</h1>
            </div>
            <div className="about clearfix">
                <p>Hi, I'm Sharon <span role="img" aria-label="hand wave emoji">👋</span> . I’m a <span className="purple">full-stack developer</span>  transitioning from a health IT/business focus. Over the years, I’ve worn many different hats  <span role="img" aria-label="blue cap emoji">🧢 </span> as a project manager, business consultant and implementation engineer. Working in clinical settings <span role="img" aria-label="hospital emoji">🏥</span> has shown me how poorly-implemented/designed software <span role="img" aria-label="monitor emoji">🖥</span> can hinder the day-to-day operations of staff, as well as patient safety. These experiences have given me a glimpse of the importance of <span className="mint">user-centric design</span>, as well as sparking a burning curiosity to dive deeper into how applications are built. I've been known to be the team "swiss army knife" <span role="img" aria-label="swiss flag emoji">🇨🇭</span> and fill the gaps whenever we lack resources, I'm deeply <span className="orange">empathetic for all cross-functional domains</span>. I believe a team-focused and transparent communication style, as well as the ability to thrive and <span className="purple">adapt in resource-strapped environments</span> also make me a great developer <span role="img" aria-label="woman on laptop emoji">👩🏻‍💻 </span>.</p>
                <p>When I'm not coding, you can find me baking <span role="img" aria-label="cupcake emoji">🧁 </span> up a storm at home, tending to my plants <span role="img" aria-label="plant emoji">🌵 </span>or travelling in search of the perfect bowl of noodles <span role="img" aria-label="noodles emoji">🍜 </span> or underwater creature to befriend <span role="img" aria-label="scuba mask emoji">🤿 </span>.</p>
            </div>

            <div className="tech tp-3">
                <h3>My Toolbox</h3>
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
                        <td>PostgreSQL</td>
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
            <div className="resume tb-5">
                <h3>Curious about the work I've done?</h3>
                <span className="resume-span"><a href={pdf} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faArrowCircleRight } /> Check out my resume.</a></span>
            </div>
        </Container>
    )
}

export default About