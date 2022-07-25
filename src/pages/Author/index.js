import { useEffect, useState } from 'react';
import { Heading, Pane, UnorderedList } from 'evergreen-ui';
import { useLocation } from 'react-router-dom';

import { getArticleByAuthor } from '../../api/articles';
import PreviewThumbnail from '../../components/PreviewThumbnail';

function Author() {
  const { pathname } = useLocation();
  const userPath = pathname.substring(10);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fethcData() {
      const article = await getArticleByAuthor(userPath);

      setArticles(article);
    }
    fethcData();
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
        </UnorderedList>
      </Pane>
    </Pane>
  );
}

export default Author;
