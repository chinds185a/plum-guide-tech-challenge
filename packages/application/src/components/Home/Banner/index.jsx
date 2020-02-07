import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

// components
import Button from "../../Button"

// Styled Components
const StyledRow = styled(Row)`
  border: 1px solid ${props => props.theme.colours.lightGrey};
  padding: 1.1em 1em;
  margin-top: -50px;
  background-color: ${props => props.theme.colours.white};
`

const Title = styled.h2`
  font-size: 1.1em;
  font-weight: 400;
  color: ${props => props.theme.colours.darkGrey};
  margin-top: 0;
  margin-bottom: 10px;
`

const Location = styled.span`
  font-size: 0.8em;
  font-weight: 200;
  color: ${props => props.theme.colours.lightGrey};
  text-transform: uppercase;
`

const Price = styled.span`
  font-size: 1.8em;
`

const PriceLabel = styled.span`
  font-size: 0.8em;
  color: ${props => props.theme.colours.lightGrey};
`

const Banner = ({ title, location, price }) => {
  return (
    <Container fluid align="center">
      <Col lg={10}>
        <StyledRow align="center">
          <Col sm={12} md={6} justify="start">
            <Title>{title}</Title>
            <Location>{location}</Location>
          </Col>
          <Col sm={12} md={3}>
            <Price>£{price}</Price>
            <PriceLabel>Total stay</PriceLabel>
          </Col>
          <Col sm={12} md={3}>
            <Button label="RESERVE" />
          </Col>
        </StyledRow>
      </Col>
    </Container>
  )
}

export default Banner
