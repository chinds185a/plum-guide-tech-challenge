import React from "react"
import { string } from "prop-types"
import { Cell } from "styled-css-grid"
import styled from "styled-components"

const Name = styled.h1`
  font-size: 2.5em;
  color: ${props => props.theme.colours.darkGrey};
  font-weight: 400;
  margin-bottom: -20px;
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
  <Cell width={10} height={2} left={2} center middle>
    <Location>{location}</Location>
    <Name>{name}</Name>
  </Cell>
)

HomeTitle.propTypes = {
  name: string,
  location: string,
}

export default HomeTitle
