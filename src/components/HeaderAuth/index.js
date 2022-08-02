import React, { useState, useContext } from 'react';
import { BiUser } from 'react-icons/bi';

import UserContext from '../../UserContext';
import IdentificationModal from '../IdentificationModal';

import {
  StyledHeaderAuth,
  UserProfileWrapper,
  UserProfile,
  AuthBtn
} from './index.style';

  function setToken(json) {
  localStorage.setItem('token', json?.token);
}

function HeaderAuth({
  visibleAuth = false,
  flexDirection = false
  }) {
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
        ? <StyledHeaderAuth
          visibleAuth={visibleAuth}
          flexDirection={flexDirection}>
            <UserProfileWrapper>
              <BiUser />
              <UserProfile>{user?.username}</UserProfile>
            </UserProfileWrapper>
              <AuthBtn onClick={onLogout} text='Log Out'/>
          </StyledHeaderAuth>
        :  <StyledHeaderAuth visibleAuth={visibleAuth}>
              <AuthBtn onClick={() => setVisible(true)} text='Log In' />
                <IdentificationModal
                  show={visible}
                  visible={() => setVisible(false)}
                  onLogin={onLogin} />
            </StyledHeaderAuth>
      }
    </div>
  );
};

export default HeaderAuth;

