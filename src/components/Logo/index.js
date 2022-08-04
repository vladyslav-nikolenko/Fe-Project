import React from 'react';

import {
  StyledLogo,
  LogoAccent
} from './index.style';

function Logo() {

    return (
      <StyledLogo  to='/'>
          <LogoAccent>m</LogoAccent>.news
      </StyledLogo>
    );
}

export default Logo;
