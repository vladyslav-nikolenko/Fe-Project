import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CommentItem from '../CommentItem';
import { getCommentsByArticleId } from '../../api/comments';

import s from './CommentList.module.css';

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
      <ul className={s.list}>
        {!comments.length ?
          <div>
            <h2 className={s.title}>This article has no comments yet.</h2>
          </div> :
          <div>
            <h2 className={s.title}>Comments</h2>
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
      </ul>
    );
  ;
};

export default CommentList;
