import React, { ElementType } from 'react';
import { Link } from 'react-router-dom';
import {
    Link as ChakraLink,
    Text,
    Icon,
    LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
    children: string;
    icon: ElementType;
    href: string;
}

export default function NavLink({
    children,
    href,
    icon,
    ...rest
}: NavLinkProps) {
    return (
        <Link to={href}>
            <ChakraLink display='flex' align='center' {...rest}>
                <Icon as={icon} fontSize='20' />
                <Text ml='4' fontWeight='medium'>
                    {children}
                </Text>
            </ChakraLink>
        </Link>
    );
}
