import React from 'react';
import styled from "styled-components";
import { Button } from 'components/atoms/Button/Button.styles';

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
const NewsSection = () => {
    return (
        <NewsWrapper>
            <ArticleWrapper>
                <NewsSectionHeader>University news feed</NewsSectionHeader>
                <ContentWrapper>
                    <p>news4</p>
                </ContentWrapper>
                <Button isBig>Read more</Button>
            </ArticleWrapper>
        </NewsWrapper>
    )
}

export default NewsSection