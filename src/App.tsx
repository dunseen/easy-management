import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
import { Routes } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ModalProvider>
                    <SidebarDrawerProvider>
                        <Routes />
                    </SidebarDrawerProvider>
                </ModalProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export { App };
