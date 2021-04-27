import React, { useRef } from 'react';
import { auth } from '../../firebase.config';
import './SignIn.css';

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = e => {
    e.preventDefault(); //? To prevent default refresh
    //! Registerting the New user with Email and password
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => console.log(authUser))
      .catch(error => alert(error.message));
  };

  const signIn = e => {
    e.preventDefault(); //? This will prevent default refresh

    //! SignIn the user with existing email and password
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => console.log(authUser))
      .catch(error => alert(error.message));
  };

  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="Email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
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
