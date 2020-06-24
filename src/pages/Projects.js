import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import dodo from '../assets/p3@2x.png'
import tasty from '../assets/p4@2x.png'
import aloe from '../assets/p2@2x.png'
import codenames from '../assets/p1@2x.png'



const Projects = props => {
    return (
        <Container className="tp-3 projects">
            <h1>Projects</h1>
            <Row className="wrapper tp-3">
                <div className="wrap">
                    <Image src={codenames} className="image" />
                    <div className="overlay2">
                        <div className="desc">
                            <h3>Codenames</h3>
                            <p className="abt">online version of the award-winning board game with real-time bi-directional streaming of moves for players</p>
                            <p className="tech">Bootstrap, Express, JavaScript, Node.js, Socket.io</p>
                            <br/>
                            <p><a href="http://codenames-ga.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/codenames" target="_blank" rel="noopener noreferrer">Code</a></p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <Image src={aloe} className="image" />
                    <div className="overlay2">
                        <div className="desc">
                            <h3>aloe there</h3>
                            <p className="abt">plant care resource and exchange platform</p>
                            <p className="tech">EJS, Express, Google Maps Address Autocompletion API, JavaScript, Materialize, Node.js, Passport, PostgresSQL, Sequelize, web scraping</p>
                            <p>demo account: aloe@there.com | <em>aloethere</em></p>
                            <p><a href="https://aloe-there.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/aloe-there" target="_blank" rel="noopener noreferrer">Code</a></p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <Image src={dodo} className="image" />
                    <div className="overlay2">
                        <div className="desc">
                            <h3>Dodo Swap</h3>
                            <p className="abt">Animal Crossing catalogue party platform</p>
                            <p className="tech">Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Typescript   </p>
                            <p>demo account: wilbur@dodo.com | <em>wilburtest</em></p>
                            <p><a href="http://dodoswap.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/dodo-swap" target="_blank" rel="noopener noreferrer">Code</a></p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <Image src={tasty} className="image" />
                    <div className="overlay2">
                        <div className="desc">
                            <h3>Tasty Roots</h3>
                            <p className="abt">Family Recipe Sharing Platform</p>
                            <p className="tech">Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Redux   </p>
                            <p>demo account: tasty@roots.com | <em>tastyroots</em></p>
                            <p><a href="http://tasty-roots-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/prj4-tastyroots-client" target="_blank" rel="noopener noreferrer">Code</a></p>
                        </div>
                    </div>
                </div>
            </Row >
        </Container >
    )
}

export default Projects