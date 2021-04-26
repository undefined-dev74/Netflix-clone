import React from 'react';
import './SignIn.css';

const SignIn = () => {
  const register = e => {
    e.preventDefault();
  };

  const signIn = e => {
    e.preventDefault();
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="Email" placeholder="Email" />
        <input placeholder="Password" type="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signIn__gray">New to Netflix?</span>
          <span className="signIn__link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
