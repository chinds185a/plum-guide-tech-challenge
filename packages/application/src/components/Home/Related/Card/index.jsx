import React from "react"
import { string } from "prop-types"
import { Row, Col } from "react-grid-system"
import ProgressiveImage from "react-progressive-image"

const Card = ({ title, description, image }) => (
  <Col md={4}>
    <Row>
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
            alt={description}
          />
        )}
      </ProgressiveImage>
    </Row>
    <Row>
      <h3>{title}</h3>
    </Row>
    <Row>
      <h3>{description}</h3>
    </Row>
  </Col>
)

Card.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
}

export default Card
