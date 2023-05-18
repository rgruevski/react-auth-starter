import { forgotPasswordRoute } from './forgotPasswordRoute';
import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { resetPasswordRoute } from './resetPasswordRoute';
import { emailVerifyRoute } from "./emailVerifyRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
export const routes = [
    logInRoute,
    signUpRoute,
    updateUserInfoRoute,
    emailVerifyRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    // testEmailRoute,
    testRoute
];

// curl -X POST -H "Content-Type: application/json" -d '{"key1": "value1", "key2": "value2"}' http://localhost:8080