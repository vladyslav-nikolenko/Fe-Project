import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNavigationItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 400;
  font-size: var(--font-size-300);
  color: var(--color-gray-300);
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  &.active {
    color: var(--color-blue-300);
  }

  &:not(:last-child) {
      margin-right: 10px;
    }
`;
