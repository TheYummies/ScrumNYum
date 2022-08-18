import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/signup');
  }

  return (
    <div className='login-content d-flex vh-100 align-items-center'>
      <div>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52f5cae7-5e1f-4276-88dd-9b2f7cf6100c/dfbdeij-b044cb27-3b7a-4462-82e5-1fa2919a24e3.png/v1/fill/w_1280,h_686,strp/scrumnyum_by_anthonylo87_dfbdeij-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNTJmNWNhZTctNWUxZi00Mjc2LTg4ZGQtOWIyZjdjZjYxMDBjXC9kZmJkZWlqLWIwNDRjYjI3LTNiN2EtNDQ2Mi04MmU1LTFmYTI5MTlhMjRlMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ivjdnc5npjXYLIZw7RSZSFLT0Uekq37X4YgnOFDfwg0'
          width='800'
          className='logo'
        ></img>
      </div>
      <div className='login'>
        <div className='inner-login'>
          <header className='login-header'>Login</header>
          <form
            className='loginForm'
            id='loginForm'
            method='POST'
            action='/login'
          >
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Enter Username'
              className='login-input'
            />
            <br />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter Password'
              className='login-input'
            />
            <br />
            <div className='loginBtns'>
              <button className='login-button' type='submit'>
                Sign In
              </button>
              {/* //Login button makes fetch request onClick, if truthy links to /scrums */}
              <Link to='/signup'>
                <button className='login-button' type='button'>
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* <Link to='/scrum'>Scrum</Link>
      <Link to='/settings'>Settings</Link> */}
    </div>
  );
}

export default Login;
