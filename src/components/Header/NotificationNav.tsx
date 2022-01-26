import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine } from 'react-icons/ri';
import { BsClipboardPlus } from 'react-icons/bs';

export default function NotificationNav() {
    return (
        <HStack
            spacing={['6', '8']}
            mx={['6', '8']}
            pr={['6', '8']}
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
        >
            <Icon as={RiNotificationLine} fontSize='22' />
            <Icon
                as={BsClipboardPlus}
                fontSize='22'
                _hover={{
                    color: 'gray.100',
                }}
                cursor='pointer'
            />
        </HStack>
    );
}
