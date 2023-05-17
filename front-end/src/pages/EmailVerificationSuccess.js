<<<<<<< HEAD
import { useHistory } from 'react-router-dom';

export const EmailVerificationSuccess = () => {
    const history = useHistory();

=======
import { useHistory } from "react-router-dom";
export const EmailVerificationSuccess = () => {
    const history = useHistory();
>>>>>>> 6449e63 (Email Verification)
    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p>
<<<<<<< HEAD
                Thanks for verifying your email, now you can use all the app's features.
=======
                Thanks for verifying your email, now you can use every feature.
>>>>>>> 6449e63 (Email Verification)
            </p>
            <button onClick={() => history.push('/')}>Go to home page</button>
        </div>
    );
}