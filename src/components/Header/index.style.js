import styled from 'styled-components';

import device from '../../constants/device';

const {  tablet   } = device;

export const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
  background-color: var(--color-gray-100);

  @media screen and ${tablet} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;





