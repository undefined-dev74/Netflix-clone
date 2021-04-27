import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from '../src/containers/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { auth } from './firebase.config';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './pages/Profile/Profile';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      <HomeScreen />;
      if (userAuth) {
        // ! Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
