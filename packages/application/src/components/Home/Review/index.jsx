import React from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { Cell } from "styled-css-grid"

const ReviewTitle = styled.h4`
  font-size: 1.8em;
  color: ${props => props.theme.colours.darkGrey};
`

const ReviewText = styled.p`
  line-height: 1.2em;
`

const Review = ({ title, reviewText }) => (
  <Cell width={4} left={3}>
    <ReviewTitle>{title}</ReviewTitle>
    <ReviewText>{reviewText}</ReviewText>
  </Cell>
)

Review.propTypes = {
  title: string,
  reviewText: string,
}

Review.defaultProps = {
  title: "Plum's Review",
}

export default Review
