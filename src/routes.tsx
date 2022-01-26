import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { CreateOrder } from './pages/Orders/Create';
import { Customers } from './pages/Customers';
import { Overview } from './pages/Overview';
import { CreateCustomer } from './pages/Customers/Create';
import { UpdateCustomer } from './pages/Customers/Update';

const Routes = () => {
    return (
        <AppRoutes>
            <Route path='/' element={<Login />} />

            <Route path='/dashboard' element={<Dashboard />}>
                <Route path='overview' element={<Overview />} />
                <Route path='customers' element={<Customers />} />
                <Route path='customers/create' element={<CreateCustomer />} />
                <Route path='customers/update' element={<UpdateCustomer />} />
                <Route path='orders' element={<Orders />}>
                    <Route path='create' element={<CreateOrder />} />
                </Route>
            </Route>
        </AppRoutes>
    );
};

export { Routes };
