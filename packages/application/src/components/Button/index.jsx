import React from "react"
import { bool, string } from "prop-types"
import styled from "@emotion/styled"

// Styled Components
const StyledButton = styled.button`
  font-size: 0.9em;
  background-color: #fdbb30;
  border-radius: ${({ rounded }) => (rounded ? "20px" : 0)};
  padding: 12px 20px;
  border: 0;
`

const Button = ({ label, rounded }) => (
  <StyledButton rounded={rounded}>{label}</StyledButton>
)

Button.propTypes = {
  label: string,
  rounded: bool,
}

Button.defaultProps = {
  rounded: true,
}

export default Button
