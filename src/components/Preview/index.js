import React from 'react';
import { CgComment } from 'react-icons/cg';

// import Container from '../Container';

import {
  StyledPreview,
  PreviewImage,
  ContainerWithCategory,
  CategoryWrapper,
  Category,
  IconWrapper,
  PreviewComment,
  PreviewTitle,
  ContentContainer,
  PreviewContent,
  ContainerWithoutCategory,
  PreviewMoreLink
} from './index.style';


function Preview({
  id,
  category,
  title,
  spoiler,
  image,
  comments = 0,
  categoryVisibility = true }) {

  const quantityOfSymbols = categoryVisibility ? 430 : 530;
  let cutText = spoiler.slice(0, quantityOfSymbols);

  if (cutText.length < spoiler.length) {
        cutText += '... ';
        }
  // <PreviewLink href={`/${id}`}>
  const categoryLower = category.toLowerCase();

  return (
    <StyledPreview>
      <PreviewImage src={`images/${image}`} alt='article' />
        <ContentContainer>
          {categoryVisibility
            ? (<ContainerWithCategory>
                <CategoryWrapper>
                  <Category href={`/${categoryLower}`}>{category}</Category>
                    <IconWrapper>
                      <CgComment />
                        <PreviewComment href={`/${id}`}>{comments}</PreviewComment>
                      </IconWrapper>
                          </CategoryWrapper>
                            <PreviewTitle>{title}</PreviewTitle>
              </ContainerWithCategory>)
            : (<ContainerWithoutCategory>
                <PreviewTitle>{title}</PreviewTitle>
                  <IconWrapper>
                    <CgComment />
                      <PreviewComment>{comments}</PreviewComment>
                  </IconWrapper>
              </ContainerWithoutCategory>)}
                <PreviewContent>{cutText}
                  <PreviewMoreLink href={`/${id}`}>[More...]</PreviewMoreLink>
                </PreviewContent>
        </ContentContainer>
    </StyledPreview>
  );
  };

export default Preview;


