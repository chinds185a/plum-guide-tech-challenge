import React from "react"
import { Container, Row, Col } from "react-grid"

// components
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const sanitizeUrl = require("@braintree/sanitize-url").sanitizeUrl // something with the fake graphql server is messing with the urls

const Home = ({ pageContext }) => {
  const { name, location, highlights } = pageContext
  const { Image, Title, PlumsReview, Price } = highlights

  return (
    <Layout>
      <Container>
        <span>{location}</span>
        <h1>{name}</h1>
        <img src={sanitizeUrl(Image)} alt={Title} />
        <Banner title={Title} location={location} price={Price} />
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>Plum's Review</h1>
            <p>{PlumsReview}</p>
          </Col>
          <Col>
            <span>details component</span>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home
