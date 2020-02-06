import React from "react"
import styled from "styled-components"

// components
import Header from "../Header"

const Main = styled.main`
  max-width: 1600px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
