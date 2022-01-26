import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
    const { signOut, user } = useAuth();
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>{user?.displayName}</Text>
                    <Text color='gray.300' fontSize='small'>
                        {user?.email}
                    </Text>
                </Box>
            )}

            <Avatar
                size='md'
                src={user?.photoURL}
                name={user?.displayName}
                onClick={signOut}
            />
        </Flex>
    );
}
