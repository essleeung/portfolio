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
        <Row xs={1}>
          <Image src={topblobs} className="top-banner"/>
        </Row>
        <Row className="middle" xs={1}>
          <Col xl={{order:1}}>
            <Image src={girl} className="girl"/>
          </Col>
          <Col xl={{order:2}}>
          <p className="title">Welcome to my portfolio</p>
          <Image src={name} className="name"/>
          <p className="title">Full Stack Dev | Scrum Master</p>
          </Col>
        </Row>
        <Row className="btm-container">
          <Image src={bottomblob} className="btm-banner"/>
        </Row>
      </Container>
    )
}

export default Banner