import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import './Login.css';
const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="login_picture"
        />
        <button onClick={() => setSignIn(true)} className="login_button">
          Sign In
        </button>
        <img
          className="login_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
        <div className="login_gradient" />
      </div>
      <div className="login__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
