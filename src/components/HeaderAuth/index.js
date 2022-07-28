import React, { useState, useContext } from 'react';
import { BiUser } from 'react-icons/bi';

import UserContext from '../../UserContext';
import IdentificationModal from '../IdentificationModal';
import Button from '../Button';

import {
  HeaderAuthStyled,
  UserProfileWrapper,
  UserProfile
} from './index.style';

  function setToken(json) {
  localStorage.setItem('token', json?.token);
}

function HeaderAuth() {
  const [visible, setVisible] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const onLogin = (token, username) => {
            setToken(token);
            setUser(username);
  };

  const onLogout = () => {
            setToken(null);
            setUser(null);
          };

  return (
    <div>
      {user
        ? <HeaderAuthStyled>
            <UserProfileWrapper>
              <BiUser />
              <UserProfile>{user?.username}</UserProfile>
            </UserProfileWrapper>
              <Button onClick={onLogout} text='Log Out' />
          </HeaderAuthStyled>
        :  <HeaderAuthStyled>
              <Button onClick={() => setVisible(true)} text='Log In' />
                <IdentificationModal
                  show={visible}
                  visible={() => setVisible(false)}
                  onLogin={onLogin} />
            </HeaderAuthStyled>
      }
    </div>
  );
};

export default HeaderAuth;

