import styled from 'styled-components';

import HeaderNavigation from '../HeaderNavigation';

// import Button from '../Button';
// import device from '../../constants/device';

// const { tablet } = device;

// export const BurgerButton = styled(Button).attrs({
//   type: 'button',
//   text: ''
// })`
//   background-color: transparent;
//   border: none;
//   padding: 0;
//   line-height: 0;
//   color: black;

//   background-color: transparent;
//   color: var(--color-blue-200);
// `;


export const MobileMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  padding: 48px 40px;
  background-color: var(--color-blue-400);

`;

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  ${'' /* background-color: red; */}
`;

export const MobileMenuOpenBtn = styled.button`
  ${'' /* position: absolute;
  top: 10px;
  right: 15px; */}
  background-color: transparent;
  border: none;
`;


export const MobileMenuCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

export const  MobileMenuNavigation = styled(HeaderNavigation)`
  display: flex;
  flex-direction: column;
`;
