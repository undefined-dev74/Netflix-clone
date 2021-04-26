import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from '../src/containers/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { auth } from './firebase.config';

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // ! Logged In
        console.log(userAuth);
      } else {
        //! Logged Out
      }
    });
    return unsubscribe;
  }, []);
  const user = null;

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
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
