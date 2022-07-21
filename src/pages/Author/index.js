import { useEffect, useState } from 'react';
import { Heading, Image, Menu, OrderedList, Pane, Text, UnorderedList } from 'evergreen-ui';
import { useLocation } from 'react-router-dom';

import { getArticleByAuthor } from '../../api/articles';
import PreviewThumbnail from '../../components/PreviewThumbnail';

const { REACT_APP_BASE_SERVER_URL } = process.env;

function Author() {
  const { pathname } = useLocation();
  const userPath = pathname.substring(10);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticleByAuthor(userPath).then(setArticles);
  }, []);

  return (
    <Pane>
      <Heading size={800} textAlign='center'>
        {userPath}
      </Heading>
      <Pane
        display='flex'
        flexDirection='row'
        marginLeft='5%'
        marginRight='5%'
        alignItems='start'
        marginTop='10px'
      >
        <UnorderedList
          display='flex'
          flexWrap='wrap'
          marginLeft='-30px'
          marginBottom='-30px'
          justifyContent='space-between'
        >
          {articles.map(({ title, category, image, content, url, _id }, index) => (
            <PreviewThumbnail
              key={index}
              title={title}
              category={category}
              image={image}
              spoiler={content}
              url={url}
              id={_id}
            />
          ))}
        </UnorderedList>
      </Pane>
    </Pane>
  );
}

export default Author;
