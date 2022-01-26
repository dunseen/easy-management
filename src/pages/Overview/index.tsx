import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

function Overview() {
    return (
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
            <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text fontSize='lg' mb='4'>
                    Últimos pedidos
                </Text>
            </Box>
            <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text fontSize='lg' mb='4'>
                    Média Mensal
                </Text>
            </Box>
        </SimpleGrid>
    );
}

export { Overview };
