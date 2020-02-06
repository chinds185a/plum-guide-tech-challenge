import React from "react"
import { Grid, Cell } from "styled-css-grid"

// components
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const sanitizeUrl = require("@braintree/sanitize-url").sanitizeUrl // something with the fake graphql server is messing with the urls

const Home = ({ pageContext }) => {
  const { name, location, highlights } = pageContext
  const { Image, Title, PlumsReview, Price } = highlights

  return (
    <Layout>
      <Grid columns={12}>
        <Cell width={10} height={2} left={2} center middle>
          <span>{location}</span>
          <h1>{name}</h1>
        </Cell>
        <Cell width={12} center>
          <img src={sanitizeUrl(Image)} alt={Title} width="100%" />
        </Cell>
        <Cell width={10} height={2} left={2}>
          <Banner title={Title} location={location} price={Price} />
        </Cell>
        <Cell width={4} left={3}>
          <h1>Plum's Review</h1>
          <p>{PlumsReview}</p>
        </Cell>
        <Cell width={3}>
          <span>details component</span>
        </Cell>
      </Grid>
    </Layout>
  )
}

export default Home
