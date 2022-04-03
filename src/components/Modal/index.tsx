import React, { ReactNode } from 'react';
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

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    showFooter?: boolean;
}

function CustomModal({
    isOpen,
    onClose,
    showFooter = true,
    children,
}: ModalProps) {
    const initialRef = React.useRef();

    return (
        <Modal
            size={'3xl'}
            isOpen={isOpen}
            onClose={onClose}
            initialFocusRef={initialRef}
        >
            <ModalOverlay />
            <ModalContent bg='gray.800'>
                <ModalHeader>Produto</ModalHeader>
                <ModalCloseButton colorScheme={'pink'} />
                <ModalBody>{children}</ModalBody>

                {showFooter && (
                    <ModalFooter>
                        <Button
                            colorScheme='whiteAlpha'
                            mr={3}
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button colorScheme='pink'>Salvar</Button>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    );
}

export { CustomModal };
