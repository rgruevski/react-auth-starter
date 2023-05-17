<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { EmailVerificationFail } from './EmailVerificationFail';
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerificationFail } from "./EmailVerificationFail";
import { useToken } from "../auth/useToken";
>>>>>>> 6449e63 (Email Verification)

export const EmailVerificationLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const { verificationString } = useParams();
<<<<<<< HEAD
    const [,setToken] = useToken();
=======
    const [, setToken] = useToken();
>>>>>>> 6449e63 (Email Verification)

    useEffect(() => {
        const loadVerification = async () => {
            try {
                const response = await axios.put('/api/verify-email', { verificationString });
<<<<<<< HEAD
<<<<<<< HEAD
                const { token } = response.data;
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);
            } catch (e) { 
=======
                const { token } = response;
=======
                const { token } = response.data;
>>>>>>> 49e2d4f (Email Verification)
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
>>>>>>> 6449e63 (Email Verification)
                setIsSuccess(false);
                setIsLoading(false);
            }
        }
<<<<<<< HEAD

        loadVerification();
    }, [setToken, verificationString]);

    if (isLoading) return <p>Loading...</p>;
=======
        loadVerification();
    }, [setToken, verificationString])
    if (isLoading) return <p>Loading...</p>
>>>>>>> 6449e63 (Email Verification)
    if (!isSuccess) return <EmailVerificationFail />
    return <EmailVerificationSuccess />
}