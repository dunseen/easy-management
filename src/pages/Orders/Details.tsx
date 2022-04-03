import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    Select,
    SimpleGrid,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import { Input } from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AddProductModal } from './AddProductModal';
interface AddressFormData {
    street: string;
    zipCode: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}

interface CreteUserFormData {
    name: string;
    fantasyName: string;
    document: string;
    email: string;
    contact: string;
    address: AddressFormData;
    factory: string;
    fee: string;
}

const createUserSchema = yup.object().shape({
    name: yup.string().required('Razão Social obrigatória.'),
    fantasyName: yup.string().required('Nome Fantasia obrigatório.'),
    document: yup.string().required('Documento obrigatório.'),
    contact: yup.string().required('Contato obrigatório.'),
    email: yup
        .string()
        .required('E-mail obrigatório.')
        .email('E-mail inválido.'),
    zipCode: yup.string().required('CEP obrigatório.'),
    street: yup.string().required('Rua obrigatória.'),
    neighborhood: yup.string().required('Bairro obrigatório.'),
    city: yup.string().required('Cidade obrigatório.'),
    state: yup.string().required('Estado obrigatório.'),
    factory: yup.string().required('Fábrica obrigatória.'),
    fee: yup.string().required('Frete obrigatório.'),
});

const OrderDetails = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema),
    });

    const { errors } = formState;

    const handleUserFormSubmit: SubmitHandler<CreteUserFormData> = async (
        formData
    ) => {
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
                <HStack justifyContent={'space-between'}>
                    <HStack gap='4'>
                        <Heading size='lg' fontWeight='bold'>
                            Pedido: 018290
                        </Heading>
                        <HStack>
                            <Heading size='md' fontWeight='normal'>
                                Situação:
                            </Heading>
                            <Select w='fit-content'>
                                <option value='sent'>Enviado</option>
                                <option value='pending'>Análise</option>
                                <option value='done'>Faturado</option>
                                <option value='cancelled'>Cancelado</option>
                            </Select>
                        </HStack>
                    </HStack>
                    <Button
                        type='button'
                        colorScheme='pink'
                        rightIcon={<Icon as={RiAddLine} fontSize='20' />}
                        onClick={onOpen}
                    >
                        Adicionar produtos
                    </Button>
                </HStack>

                <Divider my='6' borderColor='gray.700' />

                <Flex mt='8' gap='8'>
                    <VStack spacing='8'>
                        <SimpleGrid
                            minChildWidth='320px'
                            spacing={['6', '8']}
                            w='100%'
                        >
                            <Input
                                error={errors.document}
                                name='document'
                                label='CNPJ'
                                {...register('document')}
                            />
                            <Input
                                error={errors.fantasyName}
                                name='fantasyName'
                                label='Nome Fantasia'
                                {...register('fantasyName')}
                            />
                            <Input
                                error={errors.name}
                                name='name'
                                label='Razão Social'
                                {...register('name')}
                            />
                            <Input
                                error={errors.email}
                                name='email'
                                type='email'
                                label='E-mail'
                                {...register('email')}
                            />
                            <Input
                                error={errors.contact}
                                name='contact'
                                label='Contato'
                                {...register('contact')}
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
                                error={errors.zipCode}
                                name='zipCode'
                                label='CEP'
                                {...register('zipCode')}
                            />
                            <Input
                                error={errors.city}
                                name='city'
                                label='Cidade'
                                {...register('city')}
                            />

                            <Input
                                error={errors.neighborhood}
                                name='neighborhood'
                                label='Bairro'
                                {...register('neighborhood')}
                            />
                            <Input
                                error={errors.street}
                                name='street'
                                label='Rua'
                                {...register('street')}
                            />

                            <Input
                                error={errors.state}
                                name='state'
                                label='Estado'
                                {...register('state')}
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
                                error={errors.factory}
                                name='factory'
                                label='Fábrica'
                                {...register('factory')}
                            />
                            <Input
                                error={errors.fee}
                                name='fee'
                                label='Frete'
                                {...register('fee')}
                            />
                        </SimpleGrid>
                    </VStack>
                </Flex>

                <Flex mt='8' justify='flex-end'>
                    <HStack spacing='4'>
                        <Link to='/dashboard/customers'>
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
            <AddProductModal isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export { OrderDetails };
