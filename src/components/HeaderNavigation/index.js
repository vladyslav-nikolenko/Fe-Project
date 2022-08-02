import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLink from '../HeaderLink';
import UserContext from '../../UserContext';
import CATEGORIES from '../../constants';

import { StyledHeaderNavigation } from './index.style';

function HeaderNavigation({
  visibleNav = false,
  flexDirection = false,
  handlerLink=null
}) {
const { pathname } = useLocation();
const { user } = useContext(UserContext);

  return (
    <nav>
      <StyledHeaderNavigation
        visibleNav={visibleNav}
        flexDirection={flexDirection}
      >
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
              handlerLink={handlerLink}
              />
            );})}
      </StyledHeaderNavigation>
    </nav>
  );
  ;
};

export default HeaderNavigation;
