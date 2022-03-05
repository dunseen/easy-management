import React from 'react';

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
} from '@chakra-ui/react';

import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
    ref?: any;
    inputType?: string;
}

export function Input({
    error = null,
    name,
    label,
    inputType,
    ...rest
}: InputProps) {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            {inputType === 'numberQuantity' ? (
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
            ) : (
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
            )}

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    );
}
