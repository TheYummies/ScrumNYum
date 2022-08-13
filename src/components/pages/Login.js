import React from 'react';

function Login() {
  return (
    <div>
      <header>Login Page</header>
      <form>
      <label for="userName">Username:</label>
      <input type="text" id="userName" placeholder="Enter Username" />
      <label for="password">Password:</label>
      <input type="text" id="password" placeholder="Enter Password" />
      <button>Login</button>
      </form>
      <button>Sign up</button>
    </div>
  );
}

export default Login;