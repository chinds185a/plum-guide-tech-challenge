import React from "react"
import { Container, Row, Col } from "react-grid"
import styled from "@emotion/styled"

// components
import Button from "../Button"

// Styled Components
const StyledRow = styled(Row)`
  border: 1px solid grey;
`

const Banner = ({ title, location, price }) => {
  return (
    <Container>
      <StyledRow>
        <Col>
          <h3>{title}</h3>
          <h4>{location}</h4>
        </Col>
        <Col>
          <span>£{price}</span>
          <Button label="RESERVE" />
        </Col>
      </StyledRow>
    </Container>
  )
}

export default Banner
