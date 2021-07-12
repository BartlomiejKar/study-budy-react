import React, { useState, useEffect } from 'react';
import { NewsWrapper, ArticleWrapper, NewsSectionHeader, ContentWrapper } from "./NewSection.styles"
import { Button } from 'components/atoms/Button/Button.styles';
import axios from 'axios';


const query = `
{
  allArticles {
    id
    title
content
category
image {
  url
}
  }
}
`
const NewsSection = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.post('https://graphql.datocms.com/',
      {
        query
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        }
      }
    )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch(err => setError(`Sorry, we couldn't load articles for you`));
  }, []);
  return (
    <NewsWrapper>
      {articles.length > 0 ? articles.map(({ id, title, content, category, image }) => {
        return (
          <ArticleWrapper key={id}>
            <NewsSectionHeader>
              {title}
              <p>{category}</p>
            </NewsSectionHeader>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        )
      }) : <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>}
    </NewsWrapper>
  )
}

export default NewsSection