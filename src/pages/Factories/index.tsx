import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { FactoriesTable } from './FactoriesTable';

function Factories() {
    const isLoading = false;
    const error = false;

    const factories = [
        {
            id: '1',
            name: 'Fábrica A',
        },
        {
            id: '2',
            name: 'Fábrica B',
        },
        {
            id: '3',
            name: 'Fábrica C',
        },
        {
            id: '4',
            name: 'Fábrica D',
        },
    ];

    return (
        <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
            <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                <Flex mb='8' justify='space-between' align='center'>
                    <Heading size='lg' fontWeight='normal'>
                        Fábricas
                        {/* {!isLoading && isFetching && <Spinner size="sm" ml="6" />} */}
                    </Heading>

                    <NavLink to='/dashboard/factories/create'>
                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Adicionar
                        </Button>
                    </NavLink>
                </Flex>

                {isLoading ? (
                    <Flex justify='center'>
                        <Spinner />
                    </Flex>
                ) : error ? (
                    <Flex justify='center'>
                        <Text>Falha ao obter dados do produto.</Text>
                    </Flex>
                ) : (
                    <FactoriesTable factories={factories} />
                )}
            </Box>
        </Flex>
    );
}

export { Factories };
