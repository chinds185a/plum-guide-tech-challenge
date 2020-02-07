import React from "react"
import { string } from "prop-types"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import { Picture } from "react-responsive-picture"

const Card = ({ title, description }) => (
  <Col md={4}>
    <Row>
      <Picture
        sources={[
          {
            srcSet: "https://via.placeholder.com/300X300",
            media: "(max-width: 340px)",
          },
          {
            srcSet: "https://via.placeholder.com/400X400",
            media: "(max-width: 540px)",
          },
          {
            srcSet: "https://via.placeholder.com/500X500 ",
          },
          {
            srcSet: "https://via.placeholder.com/500x500.webp",
            type: "image/webp",
          },
        ]}
        style={{ width: "100%" }}
      />
    </Row>
    <Row>
      <h3>Highlight #1</h3>
    </Row>
    <Row>
      <h3>A gorgeous and shaded private roof terrace</h3>
    </Row>
  </Col>
)

Card.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
}

export default Card
