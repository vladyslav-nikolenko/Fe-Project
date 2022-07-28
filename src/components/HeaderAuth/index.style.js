import styled from 'styled-components';

import device from '../../constants/device';

const { tablet, desktop } = device;

export const HeaderAuthStyled = styled.div`
  display: none;
  ${'' /* display: ${props => props.visible ? 'flex' : 'none'}; */}

  @media screen and ${tablet} {
    display: flex;
    flex-direction: column;
  }

  @media screen and ${desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const UserProfileWrapper = styled.div`
    display: flex;
    ${'' /* margin-left: 5px; */}
    margin-bottom: 5px;
    align-items: center;
    font-weight: 400;
    font-size: var(--font-size-300);
    color: var(--color-gray-300);

  @media screen and ${desktop} {
    margin-right: 5px;
    margin-bottom: 0px;
  }
`;

export const UserProfile = styled.div`
  margin-left: 5px;
`;
