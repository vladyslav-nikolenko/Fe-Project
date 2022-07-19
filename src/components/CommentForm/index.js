import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { addComment } from '../../api/comments';


import s from './CommentForm.module.css';

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
    <form className={s.form}
      action='submit'
      onSubmit={handleSubmit}
    >
      <label className={s.label}
        htmlFor='text'>
        <p className={s.feedback}>Leave your comment here !</p>
        <textarea
          className={s.textarea}
          value={comment}
          name='comment'
          id='text'
          rows='10'
          placeholder='Type your comment here...'
          onChange={handleChange}
        />
      </label>
      <button className={s.button}
        type='submit'>Add comments
      </button>
      {isSuccess &&
        // eslint-disable-next-line max-len
        <p className={s.success}>Your comment will be published after approving by administrator.</p>}
      {error && <p className={s.error}>Something was wrong. Please try again later.</p>}
    </form>
    );
};

export default CommentForm;
