import React, { useState, useEffect } from 'react';

import { getArticles, getArticlesByCategory } from '../../api/articles';
import ArticleList from '../../components/ArticlesList';
import Loader  from '../../components/Loader';

function All(props) {
  const [articles, setArticles] = useState([]);
  const { category } = props;
  const isApproved = true;

  useEffect(() => {
    if (category) {
      getArticlesByCategory(category).then(setArticles);
    } else {
      getArticles(isApproved).then(setArticles);
    }
  }, [category]);

if (!articles.length) {
    return <Loader/>;
  }
  const articleProps = category ? { highlights: false } : {};

  return (
    <div>
      <ArticleList articles={articles} {...articleProps} />
    </div>
  );
}

export default All;
