import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// components
import Header from "../Header"

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
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
