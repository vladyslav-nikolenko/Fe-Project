import styled from 'styled-components';

import Button from '../Button';
import device from '../../constants/device';

const { tablet } = device;

export const StyledPreviewThumbnailList = styled.ul`
    list-style: none;
    padding: 20px 0px;
    margin: 0;

  @media screen and ${tablet} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-bottom: -30px;
    justify-content: space-between;
  }
`;

export const StyledPreviewList = styled.ul`
  padding: 20px 0px;
  margin: 0;
  justify-content: space-between;
`;

export const LoadMoreBtn = styled(Button).attrs({
  type: 'button',
  text: 'Load More'
})`
  display: block;
  margin: 0  auto 20px;
  min-width: 200px;
  text-align: center;
  line-height: 26px;
`;
