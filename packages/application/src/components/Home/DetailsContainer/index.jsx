import React from "react"
import { string } from "prop-types"
import { Grid, Cell } from "styled-css-grid"
import styled from "styled-components"

// components
import Review from "../Review"
import Features from "../Features"

const Conatiner = styled(Cell)`
  margin-top: 44px;
  padding: 0 3em;
`

const DetailsContainer = ({ PlumsReview }) => (
  <Conatiner width={12}>
    <Grid>
      <Review reviewText={PlumsReview} />
      <Features />
    </Grid>
  </Conatiner>
)

DetailsContainer.propTypes = {
  PlumsReview: string.isRequired,
}

export default DetailsContainer
