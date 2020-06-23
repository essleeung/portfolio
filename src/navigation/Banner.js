import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image  from 'react-bootstrap/Image';
import topblobs from '../assets/top-blobs@2x.png'
import bottomblob from '../assets/bottom-blob@2x.png'
import girl from '../assets/girl.png'
import name from '../assets/name.png'
const Banner = props => {
    return (
      <Container fluid className="hero">
        <Row>
          <Image src={topblobs} className="top-banner"/>
        </Row>
        <Row className="middle">
          <Col>
            <Image src={girl} className="girl"/>
          </Col>
          <Col>
          <p className="title">Welcome to my portfolio</p>
          <Image src={name} className="name"/>
          <p className="title">Full Stack Dev | Scrum Master</p>
          </Col>
        </Row>
        <Row>
          <Image src={bottomblob} className="btm-banner"/>
        </Row>
      </Container>
    )
}

export default Banner