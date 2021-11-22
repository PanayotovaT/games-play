import { useState } from 'react';

import Catalog from './components/Catalog';
import Create from './components/Create';
import Edit from './components/Edit';
import GameDetails from './components/GameDetails';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeWorld from './components/WelcomeWorld';

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': < WelcomeWorld />,
    '/login': <Login />,
    '/register': <Register />,
    '/edit': <Edit />,
    '/games': <Catalog />,
    '/create-game': <Create />,
    '/game-details': <GameDetails />,
  };

  const navigationChangeHandler = (path) => {

    setPage(path);
  };

  return (
    <div className="App">
          
      <Header 
      navigationChangeHandler={navigationChangeHandler} 
      />
        <main id="main-content">
        { (routes[page]) || <h2>No Page Found</h2> }
        </main>

    </div>
  
  );
}

export default App;
