import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../Container';
import Loader from '../Loader';
import Modal from '../Modal';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { getArticleById } from '../../api/articles';

import {
  StyledArticlePage,
  AuthorName,
  AuthorLink,
  ArticleImage,
  ArticleTitle,
  ArticleText,
  ArticleImageThumbnail,
  ImageInModal
} from './index.style';

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id: titlePath } = useParams();

  useEffect( () => {
    getArticleById(titlePath).then(setArticle);
  }, []);

  if (!article) {
    return <Loader/>;
  }
  const { title, image, content, thumbnail, user } = article;

  return (
    <Container>
      <StyledArticlePage>
        <AuthorName>Author:
          <AuthorLink
            href={`/articles/${user}`}>{user}</AuthorLink>
        </AuthorName>
        <ArticleImage
          src={`images/${image}`} alt='article' />
            <ArticleTitle>{title}</ArticleTitle>
              <ArticleText>
                <ArticleImageThumbnail
                  src={`images/${thumbnail}`}
                  alt='article'
                  onClick={() => setShowModal(true)} />{content}
        </ArticleText>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ImageInModal
              src={`images/${thumbnail}`}
              alt='Large'
              onLoad={() => setIsLoaded(true)}/>
          </Modal>
      )}
        <CommentForm />
        <CommentList />
      </StyledArticlePage>
    </Container>
  );
}

export default ArticlePage;
