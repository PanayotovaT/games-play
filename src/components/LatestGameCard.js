const LatestGameCard = ({
    game,
    navigationChangeHandler,
}) => {

    const onDetailsClick = (e) => {
        e.preventDefault();
        console.log(game._id);
        navigationChangeHandler(`/game-details/${game._id}`);
    };

    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} alt="test" />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a 
                href={`/game-details/${game._id}`} 
                onClick={onDetailsClick} 
                className="btn details-btn">Details
                </a>
            </div>
        </div>

    );
};

export default LatestGameCard;