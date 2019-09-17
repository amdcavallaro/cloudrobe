import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, NotFound } from './';
import { Header } from '../components';

const Router = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);
export default Router;
