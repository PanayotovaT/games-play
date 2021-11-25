import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    let activeLinkStyles = {
        backgroundColor: 'white',
        color: 'black',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        padding: '5px',
        fontWeight: '900',
    };

    return (
        <header>
            <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink>
                <div id="user">
                    <NavLink activeClassName="active-navigation-link" to="/create-game">Create Game</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeStyle={activeLinkStyles} to="/login">Login</NavLink>
                    <NavLink activeStyle={activeLinkStyles} to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;