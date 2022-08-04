import React, { useState }  from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import MobileMenuWindow from '../MobileMenuWindow';

import {
  StyledMobileMenu,
  MobileMenuOpenBtn
} from './index.style';

function MobileMenu() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <StyledMobileMenu>
      <MobileMenuOpenBtn
        type='button'
        onClick={() => setModalActive(true)}>
        <GiHamburgerMenu
          size='1.8em'
          fill='var( --color-blue-300)' />
      </MobileMenuOpenBtn>
        {modalActive &&
          <MobileMenuWindow
            active={modalActive}
            setActive={setModalActive}
            handlerLink={()=>setModalActive(false)}
        />}
      </StyledMobileMenu>
  );
}

export default MobileMenu;

