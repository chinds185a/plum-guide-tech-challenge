import React from "react"
import { string } from "prop-types"
import { Row, Col, useScreenClass } from "react-grid-system"
import ProgressiveImage from "react-progressive-image"
import styled from "styled-components"

const StyledRow = styled(Row)`
  width: 100%;
  height: ${({ screenclass }) =>
    ["xs", "sm"].includes(screenclass) ? "30vh" : "50vh"};
`

const StyledCol = styled(Col)`
  padding: ${({ screenclass }) =>
    ["xs", "sm"].includes(screenclass) ? "0 15px" : "0"};
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colours.lightGrey};
  font-size: 1em;
  margin-top: 20px;
`

const StyledDescription = styled.span`
  color: ${({ theme }) => theme.colours.darkGrey};
  font-size: 1.2em;
  margin-top: 10px;
`

const Card = ({ title, description, image }) => {
  const screenClass = useScreenClass()
  return (
    <StyledCol md={4}>
      <StyledRow screenclass={screenClass}>
        <ProgressiveImage
          src={`${image}&w=500&h=500`}
          srcSetData={{
            srcSet: `${image}&w=320&h=160 320w, ${image}&w=500&h=500 500w`,
          }}
          placeholder={`${image}&w=100&h=50`}
        >
          {(src, loading, srcSetData) => (
            <StyledImg
              style={{ opacity: loading ? 0.5 : 1 }}
              src={src}
              srcSet={srcSetData.srcSet}
              alt={description}
            />
          )}
        </ProgressiveImage>
      </StyledRow>
      <Row>
        <StyledTitle>{title}</StyledTitle>
      </Row>

      <Row>
        <StyledDescription>{description}</StyledDescription>
      </Row>
    </StyledCol>
  )
}

Card.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
}

export default Card
