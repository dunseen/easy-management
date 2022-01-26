import React from 'react';
import { Stack } from '@chakra-ui/react';
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
} from 'react-icons/ri';
import { BsClipboardPlus } from 'react-icons/bs';

import NavLink from './NavLink';
import NavSection from './NavSection';

export default function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start '>
            <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine} href='/dashboard'>
                    Dashboard
                </NavLink>
                <NavLink icon={RiContactsLine} href='/clientes'>
                    Clientes
                </NavLink>
                <NavLink icon={BsClipboardPlus} href='/pedidos'>
                    Pedidos
                </NavLink>
            </NavSection>
            <NavSection title='AUTOMAÇÃO'>
                <NavLink icon={RiInputMethodLine} href='/forms'>
                    Formulários
                </NavLink>
                <NavLink icon={RiGitMergeLine} href='/automation'>
                    Autmotação
                </NavLink>
            </NavSection>
        </Stack>
    );
}
