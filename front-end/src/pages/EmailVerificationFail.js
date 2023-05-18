import { useHistory } from "react-router-dom";
export const EmailVerificationFail = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            <h1>Uh oh..!</h1>
            <p>
                There was an issue verifying your email.
            </p>
            <button onClick={() => history.push('/signup')}>Go to SignUp</button>
        </div>
    );
}