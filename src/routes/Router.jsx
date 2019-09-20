import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bootstrapAction } from '../actions/bootstrapActions';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Category, NotFound } from './';
import { Header } from '../components';

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bootstrapAction());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <>
                <Route
                    exact
                    path={['/', '/categories/:id']}
                    component={Header}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/categories/:id" component={Category} />
                    <Route component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
    );
};
export default Router;
