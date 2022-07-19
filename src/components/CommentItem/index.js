import React from 'react';
import { ImUser } from 'react-icons/im';

import s from './CommentItem.module.css';

  function CommentItem ({ sentBy, text }){
  return (
    <li className={s.item}>
      <div className={s.icon}>
      <ImUser/>
        <p className={s.user}>{sentBy?.username}</p>
        </div>
      <p className={s.text}>{text}</p>
    </li>
  );
};

export default CommentItem;

