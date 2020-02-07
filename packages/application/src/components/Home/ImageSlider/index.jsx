import React from "react"
import { useScreenClass } from "react-grid-system"
import { Row, Col } from "react-grid-system"
import styled from "styled-components"
import ProgressiveImage from "react-progressive-image"

const SliderContainer = styled(Row)`
  height: ${({ screenclass }) =>
    ["xs", "sm"].includes(screenclass) ? "30vh" : "70vh"};

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledCol = styled(Col)`
  height: 100%;
`

const ImageSlider = ({ image, altText }) => {
  const screenClass = useScreenClass()
  return (
    <SliderContainer screenclass={screenClass}>
      <StyledCol>
        <ProgressiveImage
          src={`${image}&w=800&h=500`}
          srcSetData={{
            srcSet: `${image}&w=320&h=160 320w, ${image}&w=700&h=300 700w, ${image}&w=1000&h=500 1000w`,
          }}
          placeholder={`${image}&w=100&h=50`}
        >
          {(src, loading, srcSetData) => (
            <img
              style={{ opacity: loading ? 0.5 : 1, objectFit: "cover" }}
              src={src}
              srcSet={srcSetData.srcSet}
              alt={altText}
            />
          )}
        </ProgressiveImage>
      </StyledCol>
    </SliderContainer>
  )
}

export default ImageSlider
