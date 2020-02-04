import React from "react"
import { bool, string } from "prop-types"
import styled from "@emotion/styled"

// Styled Components
const StyledButton = styled.button`
  background-color: #fdbb30;
  border-radius: ${({ rounded }) => (rounded ? "20px" : 0)};
  padding: 5px 20px;
`

const Button = ({ label, rounded, size }) => (
  <StyledButton rounded={rounded}>{label}</StyledButton>
)

Button.propTypes = {
  label: string,
  rounded: bool,
  size: string,
}

Button.defaultProps = {
  rounded: true,
  size: "small",
}

export default Button
