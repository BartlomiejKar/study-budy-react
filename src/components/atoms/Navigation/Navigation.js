import styled from "styled-components"


export const NavigationWrapper = styled.nav`
display: flex;
flex-direction: column;
background-color: #E5E5E5;
`

export const Title = styled.h2`
background-color: #737C8E;
font: 700;
font-size:15px;
color: ${({ theme }) => theme.colors.white}
`
