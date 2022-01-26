import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

import { BsGoogle } from 'react-icons/bs';

import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const { handleSubmit, formState } = useForm();

    const { signIn } = useAuth();

    return (
        <Flex w='100vw' h='100vh' align='center' justify='center'>
            <Flex
                as='form'
                w='100%'
                maxWidth={360}
                bg='gray.800'
                p='8'
                borderRadius={8}
                flexDir='column'
                onSubmit={handleSubmit(signIn)}
            >
                <Flex
                    color='whiteAlpha.900'
                    fontWeight='extrabold'
                    letterSpacing='normal'
                    fontSize='xl'
                    textTransform='uppercase'
                    alignItems='center'
                    justifyContent='center'
                >
                    Representa Fácil
                </Flex>

                <Button
                    size='md'
                    leftIcon={<BsGoogle />}
                    type='submit'
                    mt='8'
                    colorScheme='whiteAlpha'
                    isLoading={formState.isSubmitting}
                >
                    Entrar com Google
                </Button>
            </Flex>
        </Flex>
    );
}

export { Login };
