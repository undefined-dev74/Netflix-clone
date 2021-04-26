import React from 'react';
import './SignIn.css';
const SignIn = () => {
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="Email" placeholder="Email" />
        <input placeholder="Password" type="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
