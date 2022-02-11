import React from 'react';
import { Stack } from '@chakra-ui/react';
import {
    RiContactsLine,
    RiDashboardLine,
    RiBuilding4Line,
    RiArchiveLine,
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
                <NavLink icon={BsClipboardPlus} href='/dashboard/orders'>
                    Pedidos
                </NavLink>
            </NavSection>
            <NavSection title='FORMULÁRIOS'>
                <NavLink icon={RiContactsLine} href='/dashboard/customers'>
                    Clientes
                </NavLink>
                <NavLink icon={RiArchiveLine} href='/dashboard/products'>
                    Produtos
                </NavLink>
                <NavLink icon={RiBuilding4Line} href='/dashboard/factories'>
                    Fábricas
                </NavLink>
            </NavSection>
        </Stack>
    );
}
