import styled from 'styled-components';

import device from '../../constants/device';

const { mobile, mobileEnd, tablet, desktop } = device;

export const StyledPreviewThumbnail = styled.li`
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-bottom: 70px;

  @media screen and ${mobile} {
    padding-bottom: 30px;
  }

  @media screen and ${mobileEnd} {
    &:not(:last-child) {
    margin-bottom: 20px;
    }
  }

  @media screen and ${tablet} {
    flex-basis: calc(100% / 2 - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
  }

  @media screen and ${desktop} {
    flex-basis: calc(100% / 4 - 30px);
    padding-bottom: 70px;
  }
`;

export const PreviewThumbnailImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 4px;
`;

export  const PreviewTitleThumbnail = styled.h2`
  font-weight: 600;
  font-size: var(--font-size-200);
  color: var(--color-black);
  line-height: 1.15;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 0px;
`;

export const PreviewContent = styled.p`
  font-weight: 400;
  font-size: var(--font-size-100);
  color: var(--color-gray-200);
`;

