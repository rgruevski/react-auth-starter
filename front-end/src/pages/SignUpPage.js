import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";
export const SignUpPage = () => {

  const [token, setToken] = useToken("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const history = useHistory();

  const onSignUpClicked = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };

  return (
    <div className="content-container">
      <h2>Sign Up</h2>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        type="email"
        value={emailValue}
        placeholder="Type email..."
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        value={passwordValue}
        placeholder="Type password..."
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <input
        type="password"
        value={confirmPasswordValue}
        placeholder="Confirm password..."
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      <button
        onClick={onSignUpClicked}
        disabled={
        !emailValue ||
        !passwordValue ||
        passwordValue !== confirmPasswordValue}>
        Sign Up
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot Your Password?
      </button>
      <button onClick={() => history.push("/login")}>
        Already have an account? Log In
      </button>
    </div>
  );
};
