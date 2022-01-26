import {
    Box,
    Button,
    Checkbox,
    Icon,
    Link,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
import Pagination from '../../components/Pagination';

interface User {
    id: string;
    name: string;
    document: string;
    contact: string;
    email: string;
}

interface CustomersTableProps {
    users: User[];
}

function CustomersTable({ users }: CustomersTableProps) {
    const [page, setPage] = useState(1);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <>
            <Table colorScheme='whiteAlpha'>
                <Thead>
                    <Tr>
                        <Td px={['4,', '4', '6']} color='gray.300' width='8'>
                            <Checkbox colorScheme='pink' />
                        </Td>
                        <Th>Nome</Th>
                        {isWideVersion && <Th>CNPJ</Th>}

                        <Th w='8'></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => (
                        <Tr key={user.id}>
                            <Td px={['4,', '4', '6']}>
                                <Checkbox colorScheme='pink' />
                            </Td>
                            <Td>
                                <Box>
                                    <Link
                                        onMouseEnter={() =>
                                            console.log('enter')
                                        }
                                    >
                                        <Text fontWeight='bold'>
                                            {user.name}
                                        </Text>
                                    </Link>
                                    <Text fontSize='sm' color='gray.300'>
                                        {user.email}
                                    </Text>
                                </Box>
                            </Td>
                            {isWideVersion && (
                                <Td>
                                    <Text>{user.document}</Text>
                                </Td>
                            )}
                            <Td px={['4,', '4', '6']}>
                                <Button
                                    as='a'
                                    size='sm'
                                    fontSize='sm'
                                    colorScheme='pink'
                                    leftIcon={
                                        <Icon as={RiPencilLine} fontSize='16' />
                                    }
                                >
                                    {isWideVersion ? 'Editar' : ''}
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Pagination
                totalCountOfRegister={10}
                currentPage={page}
                onPageChange={setPage}
            />
        </>
    );
}

export { CustomersTable };
