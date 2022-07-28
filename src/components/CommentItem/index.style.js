import styled from 'styled-components';

export const CommentItemStyled = styled.li`
  padding: 10px 0px;

  &:not(:last-child) {
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

