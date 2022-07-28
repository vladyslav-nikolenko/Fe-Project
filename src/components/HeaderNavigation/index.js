import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLink from '../HeaderLink';
import UserContext from '../../UserContext';
import CATEGORIES from '../../constants';

import { HeaderNavigationStyled } from './index.style';

function HeaderNavigation() {
const { pathname } = useLocation();
const { user } = useContext(UserContext);

  return (
    <nav>
      <HeaderNavigationStyled visibleNav>
        {CATEGORIES.map((item, index) => {
          const active = item.url === pathname;

          if (item.label === 'Admin' && !user) {
            return null;
          }

          return (
            <HeaderLink
              key={index}
              index={index}
              url={item.url}
              label={item.label}
              active={active}
              />
            );})}
      </HeaderNavigationStyled>
    </nav>
  );
  ;
};

export default HeaderNavigation;
