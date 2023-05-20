import { oauthClient } from "./oauthClient";
export const getGoogleOauthUrl = () => {
    const scopes = [
        'https://www.google.apis.com/auth/userinfo.email',
        'https://www.google.apis.com/auth/userinfo.profile'
    ];
    return oauthClient.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes
    });
};