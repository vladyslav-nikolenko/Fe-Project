import { Tab } from 'evergreen-ui';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div className='adminHeader'>
      <Tab>
        <NavLink to='create'>Create</NavLink>
      </Tab>
      <Tab>
        <NavLink to='edit'>Edit</NavLink>
      </Tab>
      <Outlet />
    </div>
  );
}
export default Admin;
