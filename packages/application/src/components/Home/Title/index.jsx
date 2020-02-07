import React from "react"
import { string } from "prop-types"
import { Container, Col, Row } from "react-grid-system"
import styled from "styled-components"

const Name = styled.h1`
  font-size: 2.5em;
  color: ${props => props.theme.colours.darkGrey};
  font-weight: 400;
  margin-bottom: -11px;
  margin-top: 10px;
  z-index: 10;
`

const Location = styled.span`
  font-size: 0.8em;
  color: ${props => props.theme.colours.lightGrey};
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 0;
`

const HomeTitle = ({ name, location }) => (
  <Container align="center">
    <Col>
      <Row justify="center">
        <Location>{location}</Location>
      </Row>
      <Row justify="center">
        <Name>{name}</Name>
      </Row>
    </Col>
  </Container>
)

HomeTitle.propTypes = {
  name: string,
  location: string,
}

export default HomeTitle
