import { Pane } from 'evergreen-ui';
import React from 'react';

import ArticleList from '../../components/ArticlesList';

function People(props) {
  const { Data, category } = props;
  const temp = Data.filter(
    x => x.category.label.toUpperCase() === category.toUpperCase()
  );

  return (
    <Pane>
      <ArticleList articles={temp} highlights={false} />
    </Pane>
  );
}
export default People;
