import React, { useState } from "react"
import { Container, Row, Col, useScreenClass } from "react-grid-system"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

// components
import Burger from "../Menu/Burger"
import Panel from "../Menu/Panel"

const ConatinerBorder = theme => `1px solid ${theme.colours.lightGrey}`
const StyledContainer = styled(Container)`
  height: 60px;
  border-bottom: ${({ theme }) => ConatinerBorder(theme)};
  margin-bottom: 3em;
`

const StyledRow = styled(Row)`
  height: 60px;
`

const MenuContainer = styled(Col)`
  height: 100%;
`

const SearchContainer = styled(Col)``

const Brand = styled(Col)`
  font-family: "Libre Baskerville";
  font-size: ${({ screenclass }) =>
    ["xs", "sm"].includes(screenclass) ? "1em" : "1.9em"};
  color: ${({ theme }) => theme.colours.darkGrey};
  text-transform: uppercase;
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const screenClass = useScreenClass()
  return (
    <StyledContainer fluid>
      <StyledRow align="center">
        <MenuContainer xs={2} sm={1} align="center">
          <Burger open={open} setOpen={setOpen} />
          <Panel open={open} setOpen={setOpen} />
        </MenuContainer>

        <Brand align="center" screenclass={screenClass}>
          Plum Guide
        </Brand>

        <SearchContainer xs={2} sm={1} align="center">
          <FontAwesomeIcon icon={faSearch} />
        </SearchContainer>
      </StyledRow>
    </StyledContainer>
  )
}

export default Header
