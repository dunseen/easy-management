import React from 'react';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IFactory } from '../../interfaces/IFactory';

const createUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
});

function UpdateFactories() {
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema),
    });

    const { errors } = formState;

    const handleUserFormSubmit: SubmitHandler<IFactory> = async (formData) => {
        console.log(formData);
    };
    return (
        <Flex w='100%' maxW={1480} mx='auto'>
            <Box
                as='form'
                onSubmit={handleSubmit(handleUserFormSubmit)}
                flex='1'
                borderRadius={8}
                bg='gray.800'
                p={['6', '8']}
            >
                <Heading size='lg' fontWeight='normal'>
                    Cadastrar Fábrica
                </Heading>

                <Divider my='6' borderColor='gray.700' />

                <Flex mt='8' gap='8'>
                    <VStack spacing='8'>
                        <SimpleGrid
                            minChildWidth='320px'
                            spacing={['6', '8']}
                            w='100%'
                        >
                            <Input
                                error={errors.name}
                                name='name'
                                label='Nome'
                                {...register('name')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link to='/dashboard/factories'>
                                <Button as='a' colorScheme='whiteAlpha'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type='submit'
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}
                            >
                                Atualizar
                            </Button>
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
}

export { UpdateFactories };
