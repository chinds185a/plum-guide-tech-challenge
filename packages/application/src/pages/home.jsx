import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { ScreenClassProvider } from "react-grid-system"
import ProgressiveImage from "react-progressive-image"
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
  const [relatedHomes, setRelatedHomes] = useState(null)
  useEffect(() => {
    // fetch from json server
    fetch(
      `http://my-json-server.typicode.com/chinds185a/plum-guide-tech-challenge/homes/1`
    )
      .then(response => response.json())
      .then(resultData => {
        console.log(resultData)
        setRelatedHomes(resultData)
      })
  }, [])

  const { name, location, highlights } = pageContext
  const { Image, Title, PlumsReview, Price } = highlights

  return (
    <ScreenClassProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Container fluid columns={12}>
            <HomeTitle name={name} location={location} />
            <Cell width={12} center>
              <ProgressiveImage
                delay={3000}
                src={sanitizeUrl(Image)}
                placeholder="https://via.placeholder.com/100x50"
              >
                {src => <img src={src} alt="an image" width="100%" />}
              </ProgressiveImage>
            </Cell>
            <Banner title={Title} location={location} price={Price} />
          </Container>
          <DetailsContainer PlumsReview={PlumsReview} />
          {relatedHomes && <RelatedHomes data={relatedHomes} />}
        </Layout>
      </ThemeProvider>
    </ScreenClassProvider>
  )
}

export default Home
