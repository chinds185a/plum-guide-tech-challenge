import React from "react"
import styled from "styled-components"
import { Cell } from "styled-css-grid"

const StyledSpacer = styled.div`
  height: 96px;
`

const Spacer = ({ size }) => (
  <Cell width={12}>
    <StyledSpacer size={size} />
  </Cell>
)

Spacer.defaultProps = {
  size: "small",
}

export default Spacer
