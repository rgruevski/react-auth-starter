import { getGoogleOauthUrl } from "../util/getGoogleOauthUrl";
export const getGoogleOauthUrlRoute = {
    path: '/auth/google/url',
    method: 'get',
    handler: (req, res) => {
        console.log(req);
        const url = getGoogleOauthUrl();
        res.status(200).json({ url });
    }
}