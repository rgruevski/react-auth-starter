import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { getDbConnection } from '../db';

export const updateUserInfoRoute = {
    path: '/api/users/:userId',
    method: 'put',
    handler: async (req, res) => {
        const { authorization } = req.headers;
        const { userId } = req.params;

        const updates = ({
            favoriteFood,
            hairColor,
            bio
        }) => ({
            favoriteFood,
            hairColor,
            bio
        })(req.body); // Takes a subset of properties from an object
        // the req.body returns a JSON with only the specified members of the object (to deter users from storing arbitrary data in the database)

        if (!authorization) {
            return res.status(401).json({ message: 'No authorization header sent' });
        }

        // Bearer JSON.WEB.TOKEN
        const token = authorization.split('')[1]
    }
}