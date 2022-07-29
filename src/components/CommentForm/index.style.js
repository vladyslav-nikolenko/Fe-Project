import styled from 'styled-components';

import Button from '../Button';
import device from '../../constants/device';

const { mobile, tablet, desktop } = device;

export const StyledCommentForm = styled.form`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

export const CommentFormLabel = styled.label`
  font-weight: 600;
  font-size: var(--font-size-300);
  color: var(--color-blue-300);
`;

export const CommentFormTextarea = styled.textarea.attrs({
  name: 'comment',
  id: 'text',
  rows: '10',
  placeholder: 'Type your comment here...'
})`
  width: 270px;
  padding: 10px;
  margin-top: 10px;
  font-family: inherit;
  font-size: inherit;
  resize: none;
  border-radius: 4px;
  outline: none;
  border: 2px solid var(--color-gray-200);
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;

  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-100);
    color: var(--color-gray-200);
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-blue-200);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:not(:placeholder-shown) {
    color: var(--color-gray-200);
  }

  @media screen and ${mobile} {
      width: 450px;
  }

  @media screen and ${tablet} {
      width: 738px;
  }

  @media screen and ${desktop} {
      width: 900px;
  }
`;

export const AddCommentBtn = styled(Button).attrs({
  type: 'submit',
  text: 'Add comments'
})`
  margin: 0 auto 10px;
`;


export const Message = styled.p`
  text-align: center;
  color: var(--color-blue-100);
`;
