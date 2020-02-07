import React from "react"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"

// components
import Card from "./Card"

const Title = styled.h4`
  font-size: 1.8em;
  color: ${props => props.theme.colours.darkGrey};
  margin-bottom: 0.8em;
`

const RelatedHomes = ({ data }) => (
  <Container fluid md ld xl>
    <Row justify="between" align="center">
      <Col align="center">
        <Row>
          <Title>Handpicked highlights</Title>
        </Row>
        <Row>
          <Card title="Highlight #1" description={data.Highlights.title} />
          <Card title="Highlight #1" description={data.Highlights.title} />
          <Card title="Highlight #1" description={data.Highlights.title} />
        </Row>
      </Col>
    </Row>
  </Container>
)

export default RelatedHomes
