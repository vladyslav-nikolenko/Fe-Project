import styled from 'styled-components';

import device from '../../constants/device';

const { tablet } = device;

export const StyledMobileMenu = styled.div`
  @media screen and ${tablet} {
    display: none;
  }
`;

export const MobileMenuOpenBtn = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 5px;
  right: 0px;

  @media screen and ${tablet} {
    display: none;
  }
`;
