import React from "react"
import styled from "styled-components"
import { Grid, Cell } from "styled-css-grid"

// components
import Button from "../../Button"

// Styled Components
const StyledRow = styled(Grid)`
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
    <Cell width={10} left={2}>
      <StyledRow flow="row">
        <Cell width={6} middle>
          <Title>{title}</Title>
          <Location>{location}</Location>
        </Cell>
        <Cell width={2} middle flow="row">
          <Price>£{price}</Price>
          <PriceLabel>Total stay</PriceLabel>
        </Cell>
        <Cell width={4} middle>
          <Button label="RESERVE" />
        </Cell>
      </StyledRow>
    </Cell>
  )
}

export default Banner
