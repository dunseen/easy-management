import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { CustomersTable } from './CustomersTable';

function Customers() {
    const isLoading = false;
    const error = false;

    const users = [
        {
            id: '1',
            name: 'Davys lima de Sousa Junior',
            email: 'davysjr@gmail.com',
            contact: '(91) 992500807',
            document: '040.626.432-51',
        },
    ];
    return (
        <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
            <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                <Flex mb='8' justify='space-between' align='center'>
                    <Heading size='lg' fontWeight='normal'>
                        Clientes
                        {/* {!isLoading && isFetching && <Spinner size="sm" ml="6" />} */}
                    </Heading>

                    <NavLink to='/dashboard/customers/create'>
                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Criar novo
                        </Button>
                    </NavLink>
                </Flex>

                {isLoading ? (
                    <Flex justify='center'>
                        <Spinner />
                    </Flex>
                ) : error ? (
                    <Flex justify='center'>
                        <Text>Falha ao obter dados do cliente.</Text>
                    </Flex>
                ) : (
                    <CustomersTable users={users} />
                )}
            </Box>
        </Flex>
    );
}

export { Customers };
