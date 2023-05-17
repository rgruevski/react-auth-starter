import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { testEmailRoute } from "./testEmailRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
export const routes = [
    logInRoute,
    signUpRoute,
    updateUserInfoRoute,
    testRoute
];

// curl -X POST -H "Content-Type: application/json" -d '{"key1": "value1", "key2": "value2"}' http://localhost:8080
