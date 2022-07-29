import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CommentItem from '../CommentItem';
import { getCommentsByArticleId } from '../../api/comments';

import {
  StyledCommentList,
  CommentListTitle
} from './index.style';

function CommentList() {
  const { id: articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
      getCommentsByArticleId(articleId).then(setComments);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <StyledCommentList>
      {!comments.length
        ?
          <div>
            <CommentListTitle>This article has no comments yet.
            </CommentListTitle>
          </div>
        :
          <div>
            <CommentListTitle>Comments</CommentListTitle>
            {comments.map(({ _id, sentBy, approved, text }) => (
              <CommentItem
                key={_id}
                sentBy={sentBy}
                approved={approved}
                text={text}
              />
            ))}
          </div>
        }
      </StyledCommentList>
    );
  ;
};

export default CommentList;
