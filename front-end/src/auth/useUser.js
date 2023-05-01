import { useState, useEffect } from 'react';
import { useToken } from './useToken';
export const useUser = () => {
    const [token] = useToken();

    // Getting the 'Payload' from the Token and parsing it into a JSON.
    const getPayloadFromToken = (token) => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    }

    // Define the User State.
    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });
}