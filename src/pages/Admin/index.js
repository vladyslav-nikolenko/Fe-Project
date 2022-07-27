import { Button, Pane } from 'evergreen-ui';
import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

// import style from './styles/index.module.css';

function Admin({ user }) {
  // if (!user) {
  //     return <NavLink to='/' replace />;
  // }
  if (!user) return null;

  return (
    <Pane
      display='flex'
      flexWrap='wrap'
      marginY='20px'
      justifyContent='center'
      height='500px'
    >
      <Button
        marginX='20px'
        width='90px'
        textDecoration='none'
        marginY='15px'

      >
        <Link to='create'>Create article</Link>
      </Button>
      <Button
        marginX='20px'
        width='90px'
        marginY='15px'
      >
        <NavLink to='edit'>Edit article</NavLink>
      </Button>
      <Button
        marginX='20px'
        width='90px'
        marginY='15px'
      >
        <NavLink to='/commentsapproval'>Comments</NavLink>
      </Button>
      <Outlet />
    </Pane >
  );
}
export default Admin;
