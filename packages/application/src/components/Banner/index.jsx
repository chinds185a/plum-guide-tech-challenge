import React from "react"
import styled from "styled-components"
import { Grid, Cell } from "styled-css-grid"

// components
import Button from "../Button"

// Styled Components
const StyledRow = styled(Grid)`
  border: 1px solid grey;
`

const Banner = ({ title, location, price }) => {
  return (
    <Grid>
      <Cell width={6}>
        <h3>{title}</h3>
        <h4>{location}</h4>
      </Cell>
      <Cell cell={6}>
        <span>£{price}</span>
        <Button label="RESERVE" />
      </Cell>
    </Grid>
  )
}

export default Banner
