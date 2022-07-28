import { Link } from 'react-router-dom';
import styled from 'styled-components';

import device from '../../constants/device';

const { mobile, tablet } = device;

export const StyledLogo = styled(Link)`
  margin: 0;
  font-weight: 400;
  font-size: var(--font-size-400);
  color: var(--color-gray-300);
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  border: 1px solid green;

  @media screen and ${mobile} {
    font-weight: 500;
    font-size: var(--font-size-400);
  }

  @media screen and ${tablet} {
    font-weight: 600;
    font-size: var(--font-size-500);
  }

  ${'' /* @media screen and ${desktop} {
    font-weight: 600;
    font-size: var(--font-size-500);
  } */}
`;

export const LogoAccent = styled.span`
  color: var(--color-blue-300);
`;
