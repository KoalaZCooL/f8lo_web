import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Insert from './components/Insert'
import List from './components/List'
import Detail from './components/Detail'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <p>
            Price monitor web app
          </p>
          <ul>
            <li>
              <NavLink to="/insert">Page 1</NavLink>
            </li>
            <li>
              <NavLink to="/list">Page 2</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/insert">
            <Insert />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
