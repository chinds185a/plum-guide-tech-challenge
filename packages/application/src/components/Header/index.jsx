import React from "react"
import { Container, Row, Col } from "react-grid"

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={1}>Menu</Col>

        <Col>PLUM GUIDE</Col>

        <Col md={2}>Search</Col>
      </Row>
    </Container>
  )
}

export default Header
