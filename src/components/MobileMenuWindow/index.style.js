import styled from 'styled-components';

export const StyledMobileMenuWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  padding: 48px 40px;
  background-color: var(--color-blue-400);
`;

export const MobileMenuWindowCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

export const MobileMenuWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;


