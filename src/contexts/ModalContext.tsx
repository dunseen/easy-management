import React from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

interface ModalContextProps {
    children: ReactNode;
}

type ModalContextData = UseDisclosureReturn;

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalContextProps) {
    const disclosure = useDisclosure();

    return (
        <ModalContext.Provider value={disclosure}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw Error('You must be inside this context.');
    }

    return context;
}
