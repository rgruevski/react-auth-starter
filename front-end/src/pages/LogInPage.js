import { useState } from "react";
import { useHistory } from "react-router-dom";
export const LogInPage = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const history = useHistory();

    const onLogInClicked = async () => {
        alert('Log in not implemented yet');
    }

    return (
        <div className="content-container">
            {
                errorMessage &&
                <div className="fail">{errorMessage}</div>
            }
            <input
                type="email"
                placeholder="Type Email..."
                onChange={e => setEmailValue(e.target.value)} />
            <input
                type="password"
                placeholder="Type Password..."
                onChange={e => setPasswordValue(e.target.value)} />
            <button
                onClick={onLogInClicked}
                disabled={!emailValue || !passwordValue}> Log In
            </button>
            <button
                onClick={() => history.push('/forgot-password')}> Forgot Your Password?
            </button>
            <button
                onClick={() => history.push('/signup')}> Don't have an account? Sign Up
            </button>
        </div>
    );
};
