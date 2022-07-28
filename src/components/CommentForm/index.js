import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { addComment } from '../../api/comments';

import {
  CommentFormStyled,
  CommentFormLabel,
  CommentFormTextarea,
  AddCommentBtn,
  Message
} from './index.style';

function CommentForm() {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit =   async e  => {
    e.preventDefault();
    setError(false);
    setIsSuccess(false);
      const data = {
      text: comment,
      articleId: id
    };
    const result = await addComment(data);

      if (result.message) {
        console.log(result);
        setError(true);
      } else {
        setIsSuccess(true);
        setComment('');
    }
  };

  return (
        <CommentFormStyled id='comments' action='submit'onSubmit={handleSubmit}>
          <CommentFormLabel htmlFor='text'>Leave your comment here !
            <CommentFormTextarea value={comment} onChange={handleChange}/>
          </CommentFormLabel>
      <AddCommentBtn />
      {isSuccess &&
        <Message>Your comment will be published after approving by administrator.</Message>}
      {error && <Message>Something was wrong. Please try again later.</Message>}
    </CommentFormStyled>
    );
};

export default CommentForm;
