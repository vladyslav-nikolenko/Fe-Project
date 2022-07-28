import React from 'react';
import { VscClose } from 'react-icons/vsc';

import HeaderNavigation from '../HeaderNavigation';
import HeaderAuth from '../HeaderAuth';

import {
  MobileMenuStyled,
  MobileMenuContainer,
  MobileMenuCloseBtn
} from './index.style';

function MobileMenu({ setActive }) {
  // const [modalActive, setModalActive] = useState(false);

  return (

  <MobileMenuStyled >
    <MobileMenuCloseBtn type ='button' onClick={() => setActive(false)}>
        <VscClose size='2em' fill='var( --color-blue-300)'/>
      </MobileMenuCloseBtn>
        <MobileMenuContainer>
        <HeaderNavigation style={{ display: 'flex', flexDirection: 'column' } } />
        <HeaderNavigation  visible />
        <HeaderAuth visible />
    </MobileMenuContainer>
      </MobileMenuStyled>
  );
}

export default MobileMenu;

