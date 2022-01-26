import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useContext, createContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

import { auth, provider } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

interface User {
    email: string;
    displayName: string;
    photoURL: string;
    phoneNumber: string;
    uid: string;
}

interface AuthContextData {
    signIn: () => Promise<void>;
    signOut: () => void;

    user: User;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
    sessionStorage.removeItem('easy@token');
    sessionStorage.removeItem('easy@user');
}

function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState((): User => {
        const user = sessionStorage.getItem('easy@user');

        if (user) return JSON.parse(user);

        return null;
    });

    const isAuthenticated = !!user;

    useEffect(() => {
        authChannel = new BroadcastChannel('auth');

        authChannel.onmessage = (message) => {
            switch (message.data) {
                case 'signOut':
                    signOut();
                    authChannel.close();
                    break;
                case 'signIn':
                    window.location.href = '/dashboard';
                    break;

                default:
                    break;
            }
        };
    }, []);

    async function signIn() {
        try {
            const signInResult = await signInWithPopup(auth, provider);

            const credential =
                GoogleAuthProvider.credentialFromResult(signInResult);

            const token = credential.accessToken;

            setUser(signInResult.user);

            sessionStorage.setItem(
                'easy@user',
                JSON.stringify(signInResult.user)
            );

            Cookies.set('easy@token', token, {
                expires: 30,
                sameSite: 'lax',
            });

            navigate('dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, signIn, user, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('You must be inside authprovider to use this.');

    return context;
}

export { AuthProvider, useAuth };
