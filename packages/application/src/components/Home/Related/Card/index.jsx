import React from "react"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"

const Card = () => (
  <Col md={4}>
    <Row>
      <img src="https://via.placeholder.com/500X500" alt="ksnfkenfkdn" />
    </Row>
    <Row>
      <h3>Highlight #1</h3>
    </Row>
    <Row>
      <h3>A gorgeous and shaded private roof terrace</h3>
    </Row>
  </Col>
)

export default Card
