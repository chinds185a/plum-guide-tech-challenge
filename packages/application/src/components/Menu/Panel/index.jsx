import React from "react"
import styled from "styled-components"
import { bool } from "prop-types"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colours.yellow};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colours.darkGrey};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colours.white};
    }
  }
`

const Panel = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">About us</a>
      <a href="/">Search</a>
      <a href="/404">Contact</a>
    </StyledMenu>
  )
}

Panel.propTypes = {
  open: bool.isRequired,
}

export default Panel
