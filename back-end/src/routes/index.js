import { forgotPasswordRoute } from './forgotPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute';
import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { resetPasswordRoute } from './resetPasswordRoute';
import { verifyEmailRoute } from "./verifyEmailRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";

export const routes = [
    logInRoute,
    signUpRoute,
    googleOauthCallbackRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOauthUrlRoute
];

// curl -X POST -H "Content-Type: application/json" -d '{"key1": "value1", "key2": "value2"}' http://localhost:8080