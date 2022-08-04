import React from 'react';
import { VscClose } from 'react-icons/vsc';

import HeaderNavigation from '../HeaderNavigation';
import HeaderAuth from '../HeaderAuth';

import {
  StyledMobileMenuWindow,
  MobileMenuWindowContainer,
  MobileMenuWindowCloseBtn
} from './index.style';

function MobileMenuWindow({ active, setActive, handlerLink }) {

  return (
    <StyledMobileMenuWindow>
      <MobileMenuWindowCloseBtn
        type='button'
        onClick={() => setActive(false)}>
        <VscClose size='2em' fill='var( --color-blue-300)'/>
      </MobileMenuWindowCloseBtn>
          <MobileMenuWindowContainer>
            <HeaderNavigation visibleNav flexDirection handlerLink={handlerLink} />
              <HeaderAuth visibleAuth flexDirection />
          </MobileMenuWindowContainer>
      </StyledMobileMenuWindow>
  );
}

export default MobileMenuWindow;

