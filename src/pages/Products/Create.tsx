import React from 'react';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Select,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IProducts } from '../../interfaces/IProducts';

const createUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
    price: yup.string().required('Preço obrigatório.'),
    color: yup.string().required('Cor obrigatória.'),
    reference: yup.string().required('Referência obrigatória.'),
});

function CreateProducts() {
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema),
    });

    const { errors } = formState;

    const handleUserFormSubmit: SubmitHandler<IProducts> = async (formData) => {
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
                    Cadastrar Produto
                </Heading>

                <Divider my='6' borderColor='gray.700' />

                <Flex mt='8' gap='8'>
                    <VStack spacing='8'>
                        <SimpleGrid
                            minChildWidth='320px'
                            spacing={['6', '8']}
                            w='100%'
                        >
                            <Select
                                mt={8}
                                placeholder='Selecione a Fábrica'
                                size='lg'
                                focusBorderColor='pink.500'
                                bg='gray.900'
                                variant='filled'
                                _hover={{
                                    bg: 'gray.900',
                                }}
                            >
                                <option value='option1'>Fab A</option>
                                <option value='option2'>Fab B</option>
                                <option value='option3'>Fab C</option>
                            </Select>

                            <Input
                                error={errors.name}
                                name='name'
                                label='Nome'
                                {...register('name')}
                            />
                            <Input
                                error={errors.price}
                                name='price'
                                label='Preço'
                                {...register('price')}
                            />
                        </SimpleGrid>
                    </VStack>
                    <VStack spacing='8'>
                        <SimpleGrid
                            minChildWidth='320px'
                            spacing={['6', '8']}
                            w='100%'
                        >
                            <Input
                                error={errors.referencia}
                                name='referencia'
                                label='Referência'
                                {...register('referencia')}
                            />
                            <Input
                                error={errors.color}
                                name='color'
                                label='Cor'
                                {...register('color')}
                            />
                        </SimpleGrid>
                    </VStack>
                </Flex>

                <Flex mt='8' justify='flex-end'>
                    <HStack spacing='4'>
                        <Link to='/dashboard/products'>
                            <Button as='a' colorScheme='whiteAlpha'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button
                            type='submit'
                            colorScheme='pink'
                            isLoading={formState.isSubmitting}
                        >
                            Salvar
                        </Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    );
}

export { CreateProducts };
