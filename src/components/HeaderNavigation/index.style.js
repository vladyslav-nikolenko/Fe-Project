import styled from 'styled-components';

import device from '../../constants/device';

const {  tablet } = device;

export const StyledHeaderNavigation = styled.ul`
  display: ${props => props.visibleNav ? 'flex' : 'none'};
  flex-direction: ${props => props.flexDirection ? 'column' : 'none'};

  @media screen and ${tablet} {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
