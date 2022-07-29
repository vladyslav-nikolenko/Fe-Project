import React  from 'react';

import Container from '../Container';
import Logo from '../Logo';
import HeaderNavigation from '../HeaderNavigation';
import HeaderAuth from '../HeaderAuth';
import MobileMenu from '../MobileMenu';

import {
  StyledHeader,
  Wrapper
} from './index.style';

function Header() {

return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo />
            <MobileMenu />
              <HeaderNavigation />
                <HeaderAuth />
          </Wrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;




