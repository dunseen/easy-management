import React, { ReactNode } from 'react';

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
} from '@chakra-ui/react';

import { FieldError } from 'react-hook-form';

type InputTypes = 'quantity' | 'select';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
    ref?: any;
    inputType?: InputTypes;
    children?: ReactNode;
}

export function Input({
    error = null,
    name,
    label,
    inputType,
    children,
    ...rest
}: InputProps) {
    const Input = () => {
        switch (inputType) {
            case 'quantity':
                return (
                    <NumberInput
                        name={name}
                        id={name}
                        focusBorderColor='pink.500'
                        bg='gray.900'
                        variant='outline'
                        _hover={{
                            bg: 'gray.900',
                        }}
                        min={0}
                        size='lg'
                        defaultValue={1}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                );
            case 'select':
                return (
                    <Select
                        placeholder='Selecione'
                        size='lg'
                        focusBorderColor='pink.500'
                        bg='gray.900'
                        variant='filled'
                        _hover={{
                            bg: 'gray.900',
                        }}
                    >
                        {children}
                    </Select>
                );

            default:
                return (
                    <ChakraInput
                        name={name}
                        id={name}
                        focusBorderColor='pink.500'
                        bg='gray.900'
                        variant='filled'
                        _hover={{
                            bg: 'gray.900',
                        }}
                        size='lg'
                        {...rest}
                    />
                );
        }
    };
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            {Input()}

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
}
