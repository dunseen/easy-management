import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Orders() {
    return (
        <Box>
            <Outlet />
        </Box>
    );
}

export { Orders };
