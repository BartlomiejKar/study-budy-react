import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavigationWrapper = styled.div`
display: grid;
width: 100%;
height: 100vh;
overflow-x: scroll;
margin: 0;
padding: 0;
grid-template-columns: 150px 1fr;
background-color: #E5E5E5;
`

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: "selected" })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;

  &.selected {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    /* top: 50%; */
    transform: translateY(-50%);
    /* right: -20px; */
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;