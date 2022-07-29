import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../components/Container';
import PreviewThumbnail from '../../components/PreviewThumbnail';
import { getArticleByAuthor } from '../../api/articles';

import {
  StyledAuthor,
  AuthorHeading,
  AuthorList
} from './index.style';

function Author() {
  const { pathname } = useLocation();
  const userPath = pathname.substring(10);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function dataFromFetch() {
      const article = await getArticleByAuthor(userPath);

      setArticles(article);
    }
    dataFromFetch();
  }, []);

  return (
    <Container>
      <StyledAuthor>
        <AuthorHeading>{userPath}</AuthorHeading>
        <AuthorList>
          {articles.map(({ title, category, image, content, _id }, index) => (
            <PreviewThumbnail
              key={index}
              title={title}
              category={category}
              image={image}
              spoiler={content}
              id={_id}
            />
          ))}
        </AuthorList>
      </StyledAuthor>
      </Container>
  );
}

export default Author;
