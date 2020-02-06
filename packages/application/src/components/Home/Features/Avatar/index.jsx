import React from "react"
import styled from "styled-components"

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colours.white};
  background-color: ${({ theme }) => theme.colours.darkGrey};
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
`

const AvatarInitials = styled.span`
  font-size: 1.3em;
  position: relative;
  top: 15px; /* 25% of parent */
  line-height: 30px; /* 50% of parent */
  font-weight: light;
`

const AvatarContainer = ({ initials }) => (
  <Avatar>
    <AvatarInitials>{initials}</AvatarInitials>
  </Avatar>
)

AvatarContainer.defaultProps = {
  initials: "PG",
}

export default AvatarContainer
