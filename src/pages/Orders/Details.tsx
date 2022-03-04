import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Select,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiPencilLine, RiDeleteBin2Line } from 'react-icons/ri';
import { Input } from '../../components/Input';

const OrderDetails = () => {
    return (
        <Flex
            w='100%'
            padding={['8', '16px']}
            gap='4'
            bgColor={'gray.700'}
            border='1px'
        >
            <Flex
                w='100%'
                justifyContent={'center'}
                alignItems='center'
                direction='column'
            >
                <Flex
                    justifyContent='space-between'
                    alignItems={'center'}
                    w='100%'
                    height={'fit-content'}
                >
                    <Text fontSize={'lg'}>0808</Text>
                    <Select w='fit-content'>
                        <option value='sent'>Enviado</option>
                        <option value='pending'>Análise</option>
                        <option value='done'>Faturado</option>
                        <option value='cancelled'>Cancelado</option>
                    </Select>
                </Flex>

                <HStack w='100%'>
                    <SimpleGrid spacing={['6', '8']} w='100%'>
                        <Input
                            // error={errors.referencia}
                            name='document'
                            label='CNPJ'
                            // {...register('referencia')}
                        />
                        <Input
                            // error={errors.color}
                            name='factory'
                            label='Fábrica'
                            // {...register('color')}
                        />
                        <Input
                            // error={errors.color}
                            name='frete'
                            label='Frete'
                            // {...register('color')}
                        />
                    </SimpleGrid>
                </HStack>
            </Flex>

            <Box border='1px' w='100%'>
                <Text textAlign={'center'} fontWeight={'bold'}>
                    Produtos
                </Text>
                <Flex
                    justifyContent='flex-end'
                    alignItems={'flex-end'}
                    bg='gray.800'
                    gap={'8'}
                    w='100%'
                    border={'1px'}
                >
                    <Box>
                        <Text fontWeight={'bold'}>Lavadora eletrolux</Text>
                        <Text fontSize={'sm'} color='gray.300'>
                            black
                        </Text>
                        <Text color='gray.300'>10 kg / 4 pe;as</Text>
                    </Box>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        R$ 999.999.999,00
                    </Text>
                    <VStack>
                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                        />
                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='gray'
                            leftIcon={
                                <Icon as={RiDeleteBin2Line} fontSize='16' />
                            }
                        />
                    </VStack>
                </Flex>
            </Box>
        </Flex>
    );
};

export { OrderDetails };
