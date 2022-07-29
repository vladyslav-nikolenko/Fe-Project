import React from 'react';
import { CgComment } from 'react-icons/cg';

import {
    CategoryWrapper,
    Category,
    IconWrapper,
    PreviewComment,
    PreviewMoreLink
} from '../Preview/index.style';

import {
    StyledPreviewThumbnail,
    PreviewThumbnailImage,
    PreviewTitleThumbnail,
    ContentContainer,
    PreviewContent
} from './index.style';


function PreviewThumbnail({
    id,
    category,
    title,
    spoiler,
    image,
    comments = 0
    }) {

    let cutTextThumbnail = spoiler.slice(0, 80);

    if (cutTextThumbnail.length < spoiler.length) {
        cutTextThumbnail += '... ';
        }
  const categoryLower = category.toLowerCase();

    return (
        <StyledPreviewThumbnail>
          <PreviewThumbnailImage src={`images/${image}`} alt='article'/>
            <CategoryWrapper>
              <Category href={categoryLower}>{category}</Category>
                <IconWrapper>
                  <CgComment/>
                    <PreviewComment href={`/${id}`}>{comments}</PreviewComment>
                </IconWrapper>
            </CategoryWrapper>
                      <PreviewTitleThumbnail>{title}</PreviewTitleThumbnail>
                        <ContentContainer>
                          <PreviewContent>{cutTextThumbnail}
                            <PreviewMoreLink href={`/${id}`}>[More...]</PreviewMoreLink>
                          </PreviewContent>
                        </ContentContainer>
        </StyledPreviewThumbnail>
    );
}

export default PreviewThumbnail;
