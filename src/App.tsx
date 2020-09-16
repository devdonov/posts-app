import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { Home, User } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
