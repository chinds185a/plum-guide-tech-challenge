import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"

// components
import Header from "../Header"
import Panel from "../Menu/Panel"

const GlobalStyle = createGlobalStyle`
{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-color: #252628;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
  }
`

const Main = styled.main`
  max-width: 1600px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Header open={open} setOpen={setOpen} />
      <Panel open={open} setOpen={setOpen} />
      <Main id="page-wrap">{children}</Main>
    </>
  )
}

export default Layout
