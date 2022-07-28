import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../Container';
import Loader from '../Loader';
import Modal from '../Modal';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { getArticleById } from '../../api/articles';

import {
  ArticlePageStyled,
  ArticleImage,
  ArticleTitle,
  ArticleText,
  ArticleImageThumbnail,
  Image
} from './index.style';

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id: titlePath } = useParams();

  useEffect( () => {
    getArticleById(titlePath).then(setArticle);
  }, []);

  // const [isShown, setIsShown] = useState(false);

  if (!article) {
    return <Loader/>;
  }
  const { title, image, content, thumbnail, user } = article;

  return (
    <Container>
      <ArticlePageStyled>
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
            <Image
              src={`images/${thumbnail}`}
              alt='Large'
              onLoad={() => setIsLoaded(true)}/>
          </Modal>
      )}
      <CommentForm />
        <CommentList />
      </ArticlePageStyled>
      </Container>
  );
}

export default ArticlePage;
