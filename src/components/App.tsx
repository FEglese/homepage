import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

// Components
import Home from './Home';
import Using from './Using';

function App() {
  return (
    <div className='container'>
      <header>
        <NavLink exact activeClassName="active-nav" to='/'>Fredrik Eglese</NavLink>
        <NavLink exact activeClassName="active-nav" to='/uses'>Uses</NavLink>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/uses' component={Using} />
        <Route component={Home} />
      </Switch>

      <footer>
        <p>Find me on all the socials:</p>
      </footer>

    </div>
  );
}

export default App;
