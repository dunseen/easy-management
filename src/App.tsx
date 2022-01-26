import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
import { Routes } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <SidebarDrawerProvider>
                    <Routes />
                </SidebarDrawerProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export { App };
