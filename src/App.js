import { useState } from 'react';

import Catalog from './components/Catalog/Catalog';
import Create from './components/Create';
import Edit from './components/Edit';
import GameDetails from './components/GameDetails';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeWorld from './components/WelcomeWorld';
import ErrorPage from './components/ErrorPage';

function App() {
  const [page, setPage] = useState('/home');
  const navigationChangeHandler = (path) => {
    setPage(path);
  };


  const router = (path) => {
    console.log(path);
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];


    const routes = {
      'home': < WelcomeWorld />,
      'login': <Login />,
      'register': <Register />,
      'edit': <Edit />,
      'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
      'create-game': <Create />,
      'game-details': <GameDetails id={argument} />,
    };

    return routes[rootPath];
  };

  return (
    <div className="App">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />
      <main id="main-content">
        {(router(page)) || <ErrorPage />}
      </main>

    </div>

  );
}

export default App;
