import { Flex } from '@chakra-ui/react';
import React from 'react';
import { OrdersCard } from '../../components/Card';

const ordersData = [
    {
        code: '0909',
        customer: 'Davys Lima de Sousa Junior',
        status: 'Aprovado',
        amount: 'R$500.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0101',
        customer: 'Carlos Eduardo Tinoco de Sousa',
        status: 'Aprovado',
        amount: 'R$200.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0202',
        customer: 'Marilene de Matos Tinoco',
        status: 'Aprovado',
        amount: 'R$50.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0303',
        customer: 'Maria da Silva Freitas',
        status: 'Aprovado',
        amount: 'R$500,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0404',
        customer: 'Diego Pompeu Braga',
        status: 'Aprovado',
        amount: 'R$100,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0606',
        customer: 'Cesar Pinheiro de Almeida',
        status: 'Aprovado',
        amount: 'R$750,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0707',
        customer: 'Paulo Araujo de Moraes',
        status: 'Aprovado',
        amount: 'R$50.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '0808',
        customer: 'Maraisa Senna Pinto',
        status: 'Aprovado',
        amount: 'R$1.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
    {
        code: '2020',
        customer: 'Paula Lima de Sousa',
        status: 'Aprovado',
        amount: 'R$400.000,00',
        date: '08/11/1997',
        provider: 'Loja A',
    },
];

function Orders() {
    return (
        <Flex w='100%' gap='4' flexWrap={'wrap'}>
            {ordersData.map((order) => (
                <OrdersCard
                    key={order.code}
                    amount={order.amount}
                    code={order.code}
                    date={order.date}
                    status={order.status}
                    customer={order.customer}
                    provider={order.provider}
                />
            ))}
        </Flex>
    );
}

export { Orders };
