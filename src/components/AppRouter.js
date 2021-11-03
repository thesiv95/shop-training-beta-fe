import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/constants';

export default function AppRouter() {
    const isAuth = false; // stub
    return (
        <Switch>
            {isAuth && authRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} component={Component} exact />
            })}
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} component={Component} exact />
            })}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}
