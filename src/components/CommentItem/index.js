import React from 'react';
import { BiUser } from 'react-icons/bi';

import {
  StyledCommentItem,
  CommentIconContainer,
  CommentUser,
  CommentText
} from './index.style';

function CommentItem({ sentBy, text }) {
  return (
    <StyledCommentItem>
      <CommentIconContainer>
        <BiUser />
        <CommentUser>{sentBy?.username}</CommentUser>
      </CommentIconContainer>
        <CommentText>{text}</CommentText>
    </StyledCommentItem>
  );
}

export default CommentItem;
