import React from "react";

function SignUp() {

    return (
        <div>
            <h2>Sign Up</h2>
            <header>Login Page</header>
            <form className="signUpForm">
            <input type="text" id="userName" placeholder="Create Username" />
            <input type="password" id="password" placeholder="Create Password" />
            
            <button onClick={() => {
        fetch('/signup', {
          method: 'POST',
          body: new FormData(document.getElementsByClassName(loginForm)),
          })
          .then(console.log('create account onClick invoked'))
          .then(res => res.json())
          .then(data => console.log(data))
        }}>Create Account</button>

            {/* Create account button makes fetch request onClick, if truthy redirect to /settings */}
            </form>
        </div>
    )
}

export default SignUp;