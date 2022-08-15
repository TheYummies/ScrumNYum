import React from 'react';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <header>Sign Up Information</header>
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
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Create Password'
        />

        <button type='submit'>Create Account</button>
        {/* Create account button makes fetch request onClick, if truthy redirect to /settings */}
      </form>
    </div>
  );
}

export default SignUp;
