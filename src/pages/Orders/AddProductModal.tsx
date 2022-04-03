import {
    Button,
    Flex,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProducts } from '../../interfaces/IProducts';
import { CustomModal } from '../../components/Modal';

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const createUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
    price: yup.string().required('Preço obrigatório.'),
    color: yup.string().required('Cor obrigatória.'),
    reference: yup.string().required('Referência obrigatória.'),
    factory: yup.string().required('Fabrica obrigatória.'),
});

function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema),
    });

    const { errors } = formState;

    const handleUserFormSubmit: SubmitHandler<IProducts> = async (formData) => {
        console.log(formData);
    };

    return (
        <CustomModal isOpen={isOpen} onClose={onClose} showFooter={false}>
            <Flex gap='8'>
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
                        <Input
                            error={errors.factory}
                            inputType='select'
                            name='factory'
                            label='Fábrica'
                            {...register('factory')}
                        >
                            <option value='option1'>Fab A</option>
                            <option value='option2'>Fab B</option>
                            <option value='option3'>Fab C</option>
                        </Input>

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
        </CustomModal>
    );
}

export { AddProductModal };
