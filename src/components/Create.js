const Create = () => {

    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label forhtml="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label forhtml="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label forhtml="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label forhtml="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label forhtml="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                </div>
            </form>
        </section>

    );
};

export default Create;