import { Box, Text, Flex, Badge, Select } from '@chakra-ui/react';
import React from 'react';

interface OrdersCardProps {
    code: string;
    customer: string;
    date: string;
    status: string;
    amount: string;
    provider: string;
}

const OrdersCard: React.FC<OrdersCardProps> = ({
    amount,
    code,
    date,
    customer,
    status,
    provider,
}) => {
    return (
        <Flex flex={'1'}>
            <Box
                role={'group'}
                p={6}
                maxW={'250px'}
                w={'100%'}
                boxShadow={'md'}
                bg={'gray.800'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Flex
                    align={'start'}
                    direction='column'
                    h='100%'
                    gap={2}
                    justifyContent='space-between'
                >
                    <Flex
                        align={'center'}
                        justifyContent='space-between'
                        w={'100%'}
                    >
                        <Text fontSize={'2xl'} as={'h4'}>
                            {code}
                        </Text>
                        <Select
                            size='sm'
                            w='fit-content'
                            focusBorderColor='pink.500'
                            bg='gray.900'
                            rounded={'md'}
                            variant='filled'
                            _hover={{
                                bg: 'gray.900',
                            }}
                        >
                            <option value='sent'>Enviado</option>
                            <option value='pending'>Análise</option>
                            <option value='done'>Faturado</option>
                            <option value='cancelled'>Cancelado</option>
                        </Select>
                    </Flex>
                    <Text>{provider}</Text>
                    <Text fontSize={'sm'}>{customer}</Text>
                    <Flex
                        align={'center'}
                        justifyContent='space-between'
                        w='100%'
                    >
                        <Text>{date}</Text>
                        <Text fontSize={'lg'} fontWeight='bold'>
                            {amount}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export { OrdersCard };
