import { Pane } from 'evergreen-ui';
import React from 'react';

import ArticleList from '../../components/ArticlesList';

function All({ Data }) {
  return (
    <Pane>
      <ArticleList articles={Data} />
    </Pane>
  );
}
export default All;
