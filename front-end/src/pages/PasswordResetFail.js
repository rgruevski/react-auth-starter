import { useHistory } from "react-router-dom";
export const PasswordResetFail = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            <h1>Uh oh..!</h1>
            <p>
                There was an issue resetting your password.
            </p>
            <button onClick={() => history.push('/login')}>Go to LogIn</button>
        </div>
    );
}