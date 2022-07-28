import styled from 'styled-components';

import device from '../../constants/device';

const {  tablet   } = device;

// import Button from '../Button';

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
  border: 1px solid green;
`;

export const UserLogin = styled.div`
display: flex;
margin: 0;
`;


export const MobileMenuOpenBtn = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 5px;
  right: 15px;

  @media screen and ${tablet} {
    display: none;
  }
`;



