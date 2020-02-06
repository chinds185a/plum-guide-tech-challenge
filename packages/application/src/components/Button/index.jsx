import React from "react"
import { bool, string } from "prop-types"
import styled, { withTheme } from "styled-components"

const ButtonBorder = theme => `1px solid ${theme.colours.darkGrey}`

// Styled Components
const StyledButton = styled.button`
  width: 100%;
  font-size: 0.9em;
  background-color: ${({ fill, theme }) =>
    fill ? theme.colours.yellow : theme.colours.white};
  border: ${({ fill, theme }) => (!fill ? ButtonBorder(theme) : "none")};
  border-radius: ${({ rounded }) => (rounded ? "20px" : 0)};
  padding: 12px 20px;
  margin-bottom: ${({ bottomMargin }) => (bottomMargin ? "10px" : 0)};
`

const Button = ({ label, rounded, fill, bottomMargin }) => (
  <StyledButton rounded={rounded} fill={fill} bottomMargin={bottomMargin}>
    {label}
  </StyledButton>
)

Button.propTypes = {
  label: string,
  rounded: bool,
  fill: bool,
  bottomMargin: bool,
}

Button.defaultProps = {
  rounded: true,
  fill: true,
  bottomMargin: false,
}

export default withTheme(Button)
