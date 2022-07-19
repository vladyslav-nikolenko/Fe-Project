import React, { useState, useEffect } from 'react';
import { Pane } from 'evergreen-ui';

import { getArticles, getArticlesByCategory } from '../../api/articles';
import ArticleList from '../../components/ArticlesList';

function All(props) {
  const [articles, setArticles] = useState([]);
  const { category } = props;

  useEffect(() => {
    if (category) {
      getArticlesByCategory(category).then(setArticles);
    } else {
      getArticles(articles).then(setArticles);
    }
  }, []);

if (!articles.length) {
    return <>Loading...</>;
  }
  const articleProps = category ? { highlights: false } : {};

  return (
    <Pane>
      {category ? <ArticleList articles={articles} highlights={false} />:<ArticleList articles={articles}/>}
    </Pane>
  );
}

export default All;
