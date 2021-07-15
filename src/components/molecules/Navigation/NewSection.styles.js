import styled from "styled-components"
import { Input } from '../FieldForm/Input/Input.styles'

export const SearchWrapper = styled.div`
grid-row: 1/2;
grid-column: 2/3;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
padding: 0 40px;
${Input} {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xl}
}
`
export const StatusInfo = styled.div`
color: ${({ theme }) => theme.colors.darkGrey};
font-size: ${({ theme }) => theme.fontSize.l};
margin-right: 40px;
p {
    margin: 5px;
}
`

export const NewsWrapper = styled.div`
grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
`
export const ArticleWrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    line-height: 1.6;
  }
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px
`;
export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;
export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;