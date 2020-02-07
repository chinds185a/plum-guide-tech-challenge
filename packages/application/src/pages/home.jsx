import React from "react"
import { ThemeProvider } from "styled-components"
import { Grid, Cell } from "styled-css-grid"
import { Container, Row, Col } from "react-grid-system"

// components
import Layout from "../components/Layout"
import HomeTitle from "../components/Home/Title"
import Banner from "../components/Home/Banner"
import DetailsContainer from "../components/Home/DetailsContainer"
import RelatedHomes from "../components/Home/Related"

const sanitizeUrl = require("@braintree/sanitize-url").sanitizeUrl // something with the fake graphql server is messing with the urls

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

const Home = ({ pageContext }) => {
  const { name, location, highlights } = pageContext
  const { Image, Title, PlumsReview, Price } = highlights

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container fluid columns={12}>
          <HomeTitle name={name} location={location} />
          <Cell width={12} center>
            <img src={sanitizeUrl(Image)} alt={Title} width="100%" />
          </Cell>
          <Banner title={Title} location={location} price={Price} />
        </Container>
        <DetailsContainer PlumsReview={PlumsReview} />
        <RelatedHomes />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
