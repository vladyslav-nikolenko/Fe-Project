import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Header from './components/Header';
import All from './pages/All';
import Admin from './pages/Admin';
import Create from './pages/Admin/Create';
import Edit from './pages/Admin/Edit';
import ArticlePage from './components/ArticlePage';
import UserContext from './UserContext';
import Footer from './components/Footer';



const { REACT_APP_BASE_CLIENT_URL } = process.env;

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
    fetch(`${REACT_APP_BASE_CLIENT_URL}/user/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: getToken()
      }
    })
      .then(response => response.json())
      .then(resp => {
        setUser(resp.user);
        console.log(resp.user);
      });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Header
          onLogin={(token, user) => {
            setToken(token);
            setUser(user);
          }}
          onLogout={() => {
            setToken(null);
            setUser(null);
          }}
        />

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
            <Route path='/:id' element={<ArticlePage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
