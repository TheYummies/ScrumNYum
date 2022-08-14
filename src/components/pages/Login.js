import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";

function Login() {

  //const [modal, setModal] = useState(false);
  const [goToSettings, setGoToSettings] = React.useState(false);
  // const [goToLogin, setGoToLogin] = React.useState(false);

  // const toggleModal = () => {
  //   setModal(!modal); 
  // };

  if (goToSettings) {
    return <Navigate to="/settings" />;
  }
  // if (goToLogin) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      <header>Login Page</header>
      <form>
      <label htmlFor="userName">Username:</label>
      <input type="text" id="userName" placeholder="Enter Username" />
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" placeholder="Enter Password" />
      <button onClick={() => { setGoToSettings(true) }}>Login</button>
      </form>
      <button>Sign up</button>
      <Link to='/scrum'>Scrum</Link>
      <Link to='/settings'>Settings</Link>
    </div>
    
  );
}

export default Login;