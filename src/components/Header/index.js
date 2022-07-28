import React, { useState }  from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Container from '../Container';
import Logo from '../Logo';
import HeaderNavigation from '../HeaderNavigation';
import HeaderAuth from '../HeaderAuth';
import MobileMenu from '../MobileMenu';

import {
  StyledHeader,
  Wrapper,
  MobileMenuOpenBtn
  // Wrapper1
} from './index.style';

function Header() {
  const [modalActive, setModalActive] = useState(false);

  console.log('modalActive',modalActive);


return (
    <StyledHeader>
      <Container>
      <Wrapper>
          <Logo />
          <MobileMenuOpenBtn type='button' onClick={() =>setModalActive(true)}>
          <GiHamburgerMenu size='1.8em' fill='var( --color-blue-300)' />
          </MobileMenuOpenBtn>
        {modalActive
          ? <MobileMenu
            active={modalActive}
            setActive={setModalActive}
            />
          : null}
              <HeaderNavigation />
                <HeaderAuth />
          </Wrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;




