import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';

import FocusLock from 'react-focus-lock';
import { Input } from './Input';

// 1. Create a text input component
// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef((props: any, ref: any) => {
    return <Input name={props.name} ref={ref} id={props.id} {...props} />;
});

// 2. Create the form
const Form = ({ firstFieldRef, onCancel }: any) => {
    return (
        <Stack spacing={4}>
            <TextInput
                label='First name'
                name='first-name'
                id='first-name'
                ref={firstFieldRef}
                defaultValue='John'
            />
            <TextInput label='Last name' id='last-name' defaultValue='Smith' />
            <ButtonGroup d='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onCancel}>
                    Cancelar
                </Button>
                <Button isDisabled colorScheme='teal'>
                    Salvar
                </Button>
            </ButtonGroup>
        </Stack>
    );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverForm = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const firstFieldRef = React.useRef<any>(null);

    return (
        <>
            <Box d='inline-block' mr={3}>
                John Smith
            </Box>
            <Popover
                isOpen={isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={onOpen}
                onClose={onClose}
                placement='right'
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <IconButton
                        aria-label='edit-icon'
                        size='sm'
                        icon={<EditIcon />}
                    />
                </PopoverTrigger>
                <PopoverContent p={5}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Form
                            firstFieldRef={firstFieldRef}
                            onCancel={onClose}
                        />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </>
    );
};

export { PopoverForm };
