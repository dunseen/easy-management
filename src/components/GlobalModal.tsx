import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useModal } from '../contexts/ModalContext';

interface GlobalModalProps {
    title: string;
    children: ReactNode;
}

function GlobalModal({ title, children }: GlobalModalProps) {
    const { isOpen, onClose } = useModal();
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>{children}</ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export { GlobalModal };
