import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Category, NotFound } from './';
import { Header } from '../components';

const Router = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categories/:id" component={Category} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);
export default Router;
