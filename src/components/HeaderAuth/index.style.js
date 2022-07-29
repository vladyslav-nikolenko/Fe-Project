import styled from 'styled-components';

import Button from '../Button';
import device from '../../constants/device';

const { tablet, desktop } = device;

export const StyledHeaderAuth = styled.div`
  display: ${props => props.visibleAuth ? 'flex' : 'none'};
  flex-direction: ${props => props.flexDirection ? 'column' : 'none'};

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
    margin-bottom: 10px;
    align-items: center;
    font-weight: 400;
    font-size: var(--font-size-400);
    color: var(--color-gray-300);

  @media screen and ${tablet} {
    margin-right: 5px;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: var(--font-size-300);
  }
`;

export const UserProfile = styled.div`
  margin-left: 5px;
`;

export const AuthBtn = styled(Button).attrs({
  type: 'button'
})`
  max-width: 200px;
`;
