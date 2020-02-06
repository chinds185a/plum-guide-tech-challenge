import React, { useState } from "react"
import { Grid, Cell } from "styled-css-grid"
import styled from "styled-components"

// components
import Burger from "../Menu/Burger"
import Panel from "../Menu/Panel"

const ConatinerBorder = theme => `1px solid ${theme.colours.lightGrey}`
const Container = styled(Grid)`
  height: 60px;
  border-bottom: ${({ theme }) => ConatinerBorder(theme)};
  margin-bottom: 3em;
`

const MenuContainer = styled(Cell)`
  border-right: ${({ theme }) => ConatinerBorder(theme)};
`

const SearchContainer = styled(Cell)`
  border-left: ${({ theme }) => ConatinerBorder(theme)};
`

const Brand = styled.span`
  font-family: "Libre Baskerville";
  font-size: 1.9em;
  color: ${({ theme }) => theme.colours.darkGrey};
  text-transform: uppercase;
`

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <Container columns={12}>
      <MenuContainer width={1} center middle>
        <Burger open={open} setOpen={setOpen} />
        <Panel open={open} setOpen={setOpen} />
      </MenuContainer>
      <Cell width={10} center middle>
        <Brand>Plum Guide</Brand>
      </Cell>
      <SearchContainer width={1} center middle>
        S
      </SearchContainer>
    </Container>
  )
}

export default Header
