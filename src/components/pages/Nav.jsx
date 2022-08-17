import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='scrum-header'>
      {/* <h1>My Workspace</h1> */}
      <Link to='/settings' className='scrum-buttons'>
        Settings
      </Link>
      <Link to='/' className='scrum-buttons'>
        Logout
      </Link>
    </div>
  );
}

export default Nav;
