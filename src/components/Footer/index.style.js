import styled, { keyframes } from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';

import device from '../../constants/device';

const { tablet } = device;

export const FooterStyled = styled.footer`
  width: 100vw;
  ${'' /* position: fixed; */}
  bottom: 0;
  padding: 20px;
  text-align: center;
  background-color: var(--color-gray-300);
`;

export const TextContainer = styled.div`

  @media screen and ${tablet} {
    display: flex;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: var(--font-size-300);
  color: var(--color-white);
`;

const heartbeat = keyframes`
  from {
    transform: scale(1.25);
  }
  to {
    transform: scale(1);
  }
`;

export const IconHeart = styled(BsSuitHeartFill).attrs({
  size: 16,
  alt: 'heart icon'
})`
  margin: 0px 5px;
  color: var(--color-blue-300);
  animation-name: ${heartbeat};
  animation-duration: 700ms;
  animation-iteration-count: infinite;
`;
