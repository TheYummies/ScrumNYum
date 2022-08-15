import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/signup');
  }

  return (
    <div className="login-content">
      <header>Login Page</header>
      <form className='loginForm' id='loginForm' method='POST' action='/login'>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter Username'
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter Password'
        />

        <button type='submit'>Login</button>
        {/* //Login button makes fetch request onClick, if truthy links to /settings */}
      </form>

      <Link to='/signup'>
        <button type='button'>Sign up</button>
      </Link>

      {/* <Link to='/scrum'>Scrum</Link>
      <Link to='/settings'>Settings</Link> */}
    </div>
  );
}

export default Login;
