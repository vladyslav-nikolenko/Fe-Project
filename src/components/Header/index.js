import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { ImUser } from 'react-icons/im';

import HeaderLink from '../HeaderLink';
import categories from '../../Constants';
import IdentificationModal from '../IdentificationModal';
import UserContext from '../../UserContext';

import style from './styles/index.module.css';

function Header({ onLogin, onLogout }) {
  const [modalLogIn, setVisible] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);

  return (
    <div className={cn(style.header)}>
      <div className={cn(style.container)}>
        <div className={cn(style.logo)}>
          <div className={cn(style.markLogo)}>m</div>
          .news
        </div>
        <div className={cn(style.headerCategories)} display='flex'>
          {categories.map((item, index) => {
            const active = item.url === location.pathname;

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
            );
          })}
        </div>
        <div className={cn(style.userLogin)} hidden={user}>
          <button className={cn(style.button)} onClick={() => setVisible(true)}>
            Log In
          </button>
          <IdentificationModal
            show={modalLogIn}
            visible={() => setVisible(false)}
            onLogin={onLogin}
          />
        </div>
        <div className={cn(style.isAuth)} hidden={!user}>
          <div hidden={!user} className={cn(style.userAuth)}>
            <ImUser className={cn(style.userIcon)} />
            {user?.username}
            {/* <div  ><ImUser /></div> */}
            <button className={cn(style.button)} type='button' onClick={onLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
