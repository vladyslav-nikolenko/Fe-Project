import styled from 'styled-components';

import Button from '../Button';

export const CommentsApprovalStyled = styled.ul`
  padding: 30px 0;
  margin: 0;
  list-style: none;
`;

export const CommentsApprovalTitle = styled.h2`
  font-weight: 600;
  font-size: var(--font-size-300);
  color: var(--color-blue-300);
  margin-bottom: 15px;
`;

export const CommentsApprovalBtn = styled(Button).attrs({
  type: 'button'
})`
  padding: 5px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;
