import styled from 'styled-components';

export const StyledCommentItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid var(--color-blue-100);
  }
`;

export const CommentIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CommentUser = styled.p`
  margin-left: 5px;
  font-weight: 500;
  font-size: var(--font-size-200);
`;

export const CommentText = styled.p`
overflow: hidden;
font-weight: 400;
font-size: var(--font-size-100);
color: var(--color-gray-200);
`;

