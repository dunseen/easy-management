import React from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SidebarDrawerContextProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
    const disclosure = useDisclosure();

    const router = useLocation();

    useEffect(() => {
        disclosure.onClose();
    }, [router.pathname]);

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export function useSidebarDrawer() {
    const context = useContext(SidebarDrawerContext);

    if (!context) {
        throw Error('You must be inside this context.');
    }

    return context;
}
