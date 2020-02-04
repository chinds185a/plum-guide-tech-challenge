import React from "react"
import { Container, Row, Col } from "react-grid"

const Banner = ({ title, location, price }) => {
  console.log(price)
  return (
    <Container>
      <Row>
        <Col>
          <h3>{title}</h3>
          <h4>{location}</h4>
        </Col>
        <Col>
          <span>£{price}</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
