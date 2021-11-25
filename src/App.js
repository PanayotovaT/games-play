import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Catalog from './components/Catalog/Catalog';
import WelcomeWorld from './components/WelcomeWorld';
import Create from './components/Create';
import Edit from './components/Edit';
import GameDetails from './components/GameDetails';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div className="App">

      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" exact component={Catalog} />
          <Route path="/create-game"  component={Create} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
          <Route path="/games/:gameId"  component={GameDetails} />
          <Route path="/custom">
              <h2>Custom Page</h2>
              <p>loremsfvdvgdgszdvszdvzsv</p>
          </Route>
          <Route path="/logout" render={(props)=> {
            console.log('logout');
            return <Redirect to="/" />;
          }} />
        </Switch>
      </main>

    </div>

  );
}

export default App;
