import React, { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
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
import { RiPencilLine } from 'react-icons/ri';
import Pagination from '../../components/Pagination';
import { useModal } from '../../contexts/ModalContext';
import { IFactory } from '../../interfaces/IFactory';

interface FactoriesTableProps {
    factories: IFactory[];
}

function FactoriesTable({ factories }: FactoriesTableProps) {
    const { onOpen } = useModal();
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

                        <Th w='8'></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {factories.map((factory) => (
                        <Tr key={factory.id}>
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
                                            {factory.name}
                                        </Text>
                                    </Link>
                                    {/* <Text fontSize='sm' color='gray.300'>
                                        {factory.color}
                                    </Text> */}
                                </Box>
                            </Td>

                            <Td px={['4,', '4', '6']}>
                                <NavLink
                                    to={`/dashboard/factories/update/${factory.id}`}
                                >
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='pink'
                                        onClick={onOpen}
                                        leftIcon={
                                            <Icon
                                                as={RiPencilLine}
                                                fontSize='16'
                                            />
                                        }
                                    >
                                        {isWideVersion ? 'Editar' : ''}
                                    </Button>
                                </NavLink>
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

export { FactoriesTable };
