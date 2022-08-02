import styled from 'styled-components';

import device from '../../constants/device';

const { tablet } = device;

export const StyledAuthor = styled.div`
  margin: 0 auto;
  padding: 30px 0px;
`;

export const AuthorHeading = styled.h2`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: var(--font-size-500);
  color: var(--color-blue-300);
  text-align: center;
`;

export const AuthorList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and ${tablet} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-bottom: -30px;
    justify-content: flex-start;
  }
`;
