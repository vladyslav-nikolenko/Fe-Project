import styled from 'styled-components';

import device from '../../constants/device';

const { mobile, tablet, desktop } = device;

export const ArticlePageStyled = styled.div`
   width: 270px;
   margin: 0 auto;
   padding: 15px 0px;
   ${'' /* border: 1px solid blue; */}

   @media screen and ${mobile} {
      width: 450px;
   }

   @media screen and ${tablet} {
      width: 738px;
   }

   @media screen and ${desktop} {
      width: 900px;
   }
`;

export const ArticleImage = styled.img`
   display: block;
   width: 100%;
   height: auto;
   margin-bottom: 15px;
   border-radius: 4px;
`;

export const ArticleTitle = styled.h2`
   font-weight: 600;
   font-size: var(--font-size-300);
   color: var(--color-black);
   line-height: 1.15;
   text-transform: uppercase;
   margin-bottom: 15px;

   border: 2px solid red;
`;

export const ArticleText = styled.p`
      font-weight: 400;
      font-size: var(--font-size-100);
      color: var(--color-gray-200);
      margin-bottom: 0px;

   @media screen and ${mobile} {
      margin-bottom: 50px;
   }

   @media screen and ${tablet} {
      margin-bottom: 90px;
   }
`;

export const ArticleImageThumbnail = styled.img`
   display: block;
   margin: 0px auto 10px;
   width: 200px;
   height: auto;
   border-radius: 4px;
   cursor: pointer;
   @media screen and ${mobile} {
      float: right;
      margin-bottom: 0px;
   }
`;

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
   max-width: calc(100vw - 48px);
   max-height: calc(100vh - 24px);
`;

export const Image = styled.img`
   border-radius: 8px;
   width: 90vh;
`;
