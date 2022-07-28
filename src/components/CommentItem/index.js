import React from 'react';
import { BiUser } from 'react-icons/bi';

import {
  CommentItemStyled,
  CommentIconContainer,
  CommentUser,
  CommentText
} from './index.style';

function CommentItem({ sentBy, text }) {
  return (
    <CommentItemStyled>
      <CommentIconContainer>
        <BiUser />
        <CommentUser>{sentBy?.username}</CommentUser>
      </CommentIconContainer>
        <CommentText>{text}</CommentText>
    </CommentItemStyled>
  );
}

export default CommentItem;
