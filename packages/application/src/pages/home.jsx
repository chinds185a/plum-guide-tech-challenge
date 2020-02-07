import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Container, ScreenClassProvider } from "react-grid-system"

// components
import Layout from "../components/Layout"
import HomeTitle from "../components/Home/Title"
import Banner from "../components/Home/Banner"
import DetailsContainer from "../components/Home/DetailsContainer"
import RelatedHomes from "../components/Home/Related"
import ImageSlider from "../components/Home/ImageSlider"

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
  const { homeId, name, location, highlights } = pageContext
  console.log(highlights)
  const { Image, Title, PlumsReview, Price } = highlights
  const relatedHomesUrl = `http://my-json-server.typicode.com/chinds185a/plum-guide-tech-challenge/homes/${homeId}`

  useEffect(() => {
    console.log(relatedHomesUrl)
    fetch(relatedHomesUrl)
      .then(response => response.json())
      .then(resultData => {
        console.log(resultData)
        setRelatedHomes(resultData)
      })
  }, [])

  return (
    <ScreenClassProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Container fluid columns={12}>
            <HomeTitle name={name} location={location} />
            <ImageSlider image={sanitizeUrl(Image)} altText={Title} />
            <Banner title={Title} location={location} price={Price} />
          </Container>
          <DetailsContainer PlumsReview={PlumsReview} />
          {relatedHomes && <RelatedHomes data={relatedHomes.Highlights} />}
        </Layout>
      </ThemeProvider>
    </ScreenClassProvider>
  )
}

export default Home
