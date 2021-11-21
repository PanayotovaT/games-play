const Edit = () => {

    return (
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Game</h1>
                <label forhtml="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" defaultValue="" />

                <label forhtml="category">Category:</label>
                <input type="text" id="category" name="category" defaultValue="" />

                <label forhtml="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue="" />

                <label forhtml="game-img" >Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                <label forhtml="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" defaultValue="Edit Game" />

            </div>
        </form>
    </section>

    );
};

export default Edit;