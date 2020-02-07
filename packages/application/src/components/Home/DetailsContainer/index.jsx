import React from "react"
import { string } from "prop-types"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"

// components
import Review from "../Review"
import Features from "../Features"

const Conatiner = styled(Container)`
  margin-top: 44px;
`

const DetailsContainer = ({ PlumsReview }) => (
  <Conatiner fluid sm md columns={8}>
    <Row>
      <Col md={6} lg={6}>
        <Review reviewText={PlumsReview} />
      </Col>
      <Col md={5} lg={5} offset={{ lg: 1 }}>
        <Features />
      </Col>
    </Row>
  </Conatiner>
)

DetailsContainer.propTypes = {
  PlumsReview: string.isRequired,
}

export default DetailsContainer
