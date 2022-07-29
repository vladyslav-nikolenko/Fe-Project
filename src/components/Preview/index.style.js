import styled from 'styled-components';

import device from '../../constants/device';

const { desktop } = device;

export const StyledPreview = styled.li`
  display:  flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const PreviewImage = styled.img`
  display: none;

  @media screen and ${desktop} {
    display: block;
    width: 270px;
    height: auto;
    margin-right: 30px;
    border-radius: 4px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContainerWithCategory = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Category = styled.a`
  font-weight: 400;
  font-size: var(--font-size-200);
  color: var(--color-blue-200);
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  @media screen and ${desktop} {
  font-size: var(--font-size-300);
}
`;

export const IconWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: 400;
font-size: var(--font-size-200);
color: var(--color-blue-200);

  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  @media screen and ${desktop} {
  font-size: var(--font-size-300);
  }
`;

export const PreviewComment = styled.a`
  text-decoration: none;
  color: var(--color-blue-200);
  margin-left: 5px;

  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }
`;

export  const PreviewTitle = styled.h2`
  font-weight: 600;
  font-size: var(--font-size-200);
  color: var(--color-black);
  line-height: 1.15;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ContainerWithoutCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PreviewContent = styled.p`
  font-weight: 400;
  font-size: var(--font-size-100);
  color: var(--color-gray-200);
`;

export const PreviewMoreLink = styled.a`
  font-weight: 400;
  font-size: var(--font-size-100);
  color: var(--color-blue-200);
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  @media screen and ${desktop} {
    font-size: var(--font-size-200);
  }
`;
