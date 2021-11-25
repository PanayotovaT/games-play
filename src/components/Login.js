// import { useHistory } from 'react-router-dom';


 const Login = ({
    history
}) => {
    // let historyHook = useHistory();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        history.push('/games');
        // historyHook.push('/');
    };


    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label forhtml="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label forhtml="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );
};

export default Login;