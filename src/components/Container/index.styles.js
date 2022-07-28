import styled from 'styled-components';

import device from '../../constants/device';

const { mobile, tablet, desktop } = device;

export const StyledContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;

  border: 1px solid red;

  @media screen and ${mobile} {
    width: 480px;
  }

  @media screen and ${tablet} {
    width: 768px;
  }

  @media screen and ${desktop} {
    width: 1200px;
  }
`;
