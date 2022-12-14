import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header';
import All from '../../pages/All';
import Admin from '../../pages/Admin';
import Create from '../../pages/Admin/Create';
import Edit from '../../pages/Admin/Edit';
import ArticlePage from '../ArticlePage';
import UserContext from '../../UserContext';
import Footer from '../Footer';
import CommentsApproval from '../CommentsApproval';
import Author from '../../pages/Author';
import { REACT_APP_BASE_SERVER_URL } from '../../constants/env';
import ArticlesApproval from '../ArticlesApproval';

import { AppStyled } from './index.style';


function getToken() {
  return localStorage.getItem('token');
}
function setToken(json) {
  localStorage.setItem('token', json?.token);
}

function App() {
  const [user, setUser] = useState(null);
  const value = React.useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  useEffect(() => {
    fetch(`${REACT_APP_BASE_SERVER_URL}/user/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: getToken()
      }
    })
      .then(response => response.json())
      .then(resp => {
        setUser(resp.user);
      });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <AppStyled>
          <Header />

          <div className='main'>
            <Routes>
              <Route exact path='/' element={<All />} />
              <Route exact path='/all' element={<All />} />
              <Route exact path='/people' element={<All category='people' />} />
              <Route exact path='/places' element={<All category='places' />} />
              <Route exact path='/events' element={<All category='events' />} />
              <Route path='/admin' element={<Admin user={user} />}>
                <Route path='create' element={<Create />} />
                <Route path='edit' element={<Edit />} />
              </Route>
              <Route path='/articles/:author' element={<Author />} />
              <Route path='/:id' element={<ArticlePage />} />
              <Route path='/commentsapproval' element={<CommentsApproval />} />
              <Route path='/articlesapproval' element={<ArticlesApproval />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </div>
        </AppStyled>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
