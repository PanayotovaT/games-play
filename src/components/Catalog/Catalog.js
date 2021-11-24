import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import GameCard from './GameCard';

const Catalog = ({
    navigationChangeHandler
}) => {

    const [games, setGames] = useState([]);

    useEffect(() => {

        gameService.getAll().then(res => {
            setGames(res);
        });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0

                ? games.map(game => <GameCard 
                    key={game._id} 
                    game={game} 
                    navigationChangeHandler={navigationChangeHandler} 
                    />)
                : <h3 className="no-articles">No games yet</h3>
            }


        </section>

    );
};

export default Catalog;