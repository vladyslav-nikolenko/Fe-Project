import styled from 'styled-components';

import device from '../../constants/device';

const {  tablet } = device;

export const HeaderNavigationStyled = styled.ul`
  display: none;

  ${'' /* display: ${props => props.visible ? 'flex' : 'none'}; */}

  @media screen and ${tablet} {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
