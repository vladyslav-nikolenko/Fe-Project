import { UnorderedList, Pane, Button, Spinner } from 'evergreen-ui';

import Preview from '../Preview';
import PreviewThumbnail from '../PreviewThumbnail';

function ArticleList({
  articles,
  highlights = true,
  haveMore = false,
  // haveMore = true,
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
    <Pane>
      <Pane
        width='1200px'
        paddingX='15px'
        paddingY='10px'
        marginX='auto'
        marginY='0'
      >
        <UnorderedList
          display='flex'
          flexWrap='wrap'
          marginLeft='-30px'
          marginBottom='-30px'
          justifyContent='space-between'
        >
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
                  url={url}
                />
              )) : null}
        </UnorderedList>
      </Pane>
      {rowArrayPreview.map(({ category, title, content, image, url, _id }, index) => (
        <Pane
          key={index}
          width='1200px'
          paddingX='15px'
          paddingY='5px'
          marginX='auto'
        >
          <Preview
            id={_id}
            title={title}
            category={category}
            image={image}
            spoiler={content}
            type='full'
            url={url}
            categoryVisibility={categoryVisibility}
          />
        </Pane>
      ))}
      {haveMore ?
        <Button
          display='block'
          marginY='0px'
          marginX='auto'
          minWidth='200px'
          textAlign='center'
          paddingBottom='20px'
          lineHeight='26px'
          onClick={onLoading}
        >Load more news
        </Button> : null}
      {isLoading ? <Spinner /> : null}
    </Pane>
  );
}

export default ArticleList;
