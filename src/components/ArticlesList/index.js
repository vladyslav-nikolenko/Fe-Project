import React from 'react';

import Container from '../Container';
import Preview from '../Preview';
import PreviewThumbnail from '../PreviewThumbnail';

import {
  PreviewThumbnailList,
  PreviewList,
  LoadMoreBtn
} from './index.style';

function ArticleList({
  articles,
  highlights = true,
  // haveMore = false,
  haveMore = true,
  isLoading,
  onLoading
}) {
  let highlightsArrayPreview;
  let rowArrayPreview;
  let categoryVisibility;

  if (highlights) {
    highlightsArrayPreview = articles.slice(0, 4);
    rowArrayPreview = articles.slice(4);
  } else {
    rowArrayPreview = articles;
  }

  if (!highlights && !haveMore) {
    categoryVisibility = false;
  }

  return (
    <Container>
      <PreviewThumbnailList>
        {highlightsArrayPreview
          ? highlightsArrayPreview.map(
            ({ _id, category, title, content, image, url }, index) => (
              <PreviewThumbnail
                id={_id}
                key={index}
                title={title}
                category={category}
                image={image}
                spoiler={content}
                type='thumbnail'
                url={url} />))
          : null}
        </PreviewThumbnailList>

      <PreviewList>
          {rowArrayPreview.map(({ category, title, content, image, url, _id }, index) => (
            <Preview
              id={_id}
              key={index}
              title={title}
              category={category}
              image={image}
              spoiler={content}
              type='full'
              url={url}
              categoryVisibility={categoryVisibility} />
          ))}
      </PreviewList>
        {haveMore
          ? (<LoadMoreBtn onClick={onLoading} />)
        : null}
      </Container>
  );
}

export default ArticleList;
