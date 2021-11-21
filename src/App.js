import Catalog from './components/Catalog';
import Create from './components/Create';
import Edit from './components/Edit';
import GameDetails from './components/GameDetails';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeWorld from './components/WelcomeWorld';

function App() {

  const routes = {
    '/home': WelcomeWorld,
    '/login': Login,
    '/register': Register,
    '/edit': Edit,
    '/games': Catalog,
    '/create-game': Create,
    '/game-details': GameDetails,
  };
  
  return (
    <div className="App">
          
      <Header />
        <main id="main-content">
        <WelcomeWorld />
        </main>

    </div>
  
  );
}

export default App;
