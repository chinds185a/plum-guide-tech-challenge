import React from "react"
import { ThemeProvider } from "styled-components"
import { ScreenClassProvider } from "react-grid-system"

// components
import Layout from "../components/Layout"
import SEO from "../components/seo"

// theme
const theme = {
  colours: {
    lightGrey: "#82868c",
    darkGrey: "#252628",
    white: "#FFFFFF",
    yellow: "#fdbb30",
  },
  mobile: "576px",
}

const NotFoundPage = () => (
  <ScreenClassProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </ThemeProvider>
  </ScreenClassProvider>
)

export default NotFoundPage
