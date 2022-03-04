import { Box, Text, Flex, Badge } from '@chakra-ui/react';
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
        <Flex flex='1'>
            <Box
                role={'group'}
                p={6}
                w={'100%'}
                maxW='290px'
                boxShadow={'md'}
                bg={'gray.800'}
                rounded={'lg'}
                pos={'relative'}
                height='200px'
                zIndex={1}
                _hover={{
                    cursor: 'pointer',
                    boxShadow: '2xl',
                    backgroundColor: 'gray.750',
                }}
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
                        <Badge colorScheme={'green'}>{status}</Badge>
                    </Flex>
                    <Text>{provider}</Text>
                    <Text fontSize={'sm'}>{customer}</Text>
                    <Flex
                        align={'center'}
                        justifyContent='space-between'
                        w='100%'
                    >
                        <Text fontSize={'sm'}>{date}</Text>
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
