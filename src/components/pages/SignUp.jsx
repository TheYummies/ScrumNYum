import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
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
          <h2 className='login-header'>Sign Up</h2>
          <form
            className='signUpForm'
            id='signUpForm'
            method='POST'
            action='/signup'
          >
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Create Username'
              className='login-input'
            />
            <br />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Create Password'
              className='login-input'
            />
            <br />
            <div className='loginBtns'>
              <button className='login-button' type='submit'>
                Create Account
              </button>
              <Link to='/'>
                <button className='login-button' type='submit'>
                  Cancel
                </button>
              </Link>
            </div>
            {/* Create account button makes fetch request onClick, if truthy redirect to /settings */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
