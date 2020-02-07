import React from "react"
import styled, { withTheme } from "styled-components"
import { Grid, Cell } from "styled-css-grid"

// components
import Button from "../../Button"
import Avatar from "./Avatar"

const Container = styled(Cell)`
  padding: 3em 0;
`

const HomeDetails = styled.div`
  display: flex;
  margin-bottom: 1em;
`

const HomeReviewer = styled.div`
    display: flex:
    flex-direction: row;
    margin-left: 1em;
`

const StyledParagraph = styled.p`
  margin: 0.5em 0;
`
const HrBorder = theme => `1px solid ${theme.colours.lightGrey}`

const Hr = styled.hr`
  border-top: ${({ theme }) => HrBorder(theme)};
`

const FeatureSets = styled.span`
  color: ${({ theme }) => theme.colours.lightGrey};
  display: block;
  padding: 1em 0;
`

const Features = ({}) => (
  <Container width={4}>
    <Grid columns={4}>
      <Cell width={4} left={1}>
        <HomeDetails>
          <Avatar initials="CH" />
          <HomeReviewer>
            <StyledParagraph>Home vetted by Chris Hinds</StyledParagraph>
            <StyledParagraph>Plum Guide Home Critic</StyledParagraph>
          </HomeReviewer>
        </HomeDetails>

        <Hr />

        <FeatureSets>6 guests - 3 bedrooms - 2 bathrooms</FeatureSets>

        <Hr />

        <FeatureSets>Step-free entry - 1,478 sq/ft</FeatureSets>

        <Hr />

        <FeatureSets>6 mins walk to NottingHill station</FeatureSets>

        <Button
          label="view floorplan"
          rounded={false}
          fill={false}
          bottomMargin
        />
        <Button label="view photos (23)" rounded={false} fill={false} />
      </Cell>
    </Grid>
  </Container>
)

export default Features
