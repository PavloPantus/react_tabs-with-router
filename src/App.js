import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import './App.scss';
import HomePage from './HomePage/HomePage';
import TabsPage from './TabsPage/TabsPage';

const App = () => (
  <div className="App">
    <nav className="App__navigation">
      <ul className="App__navigation-ul">
        <li className="App__navigation-item">
          <NavLink className="link" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/tabs">Tabs</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
