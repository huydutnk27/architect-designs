/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { flattenDeep } from 'lodash';

const generateFlattenRoutes = (routes: any) => {
    if (!routes) return [];
    return flattenDeep(routes.map(({ routes: subRoutes, ...rest }: any) => [rest, generateFlattenRoutes(subRoutes)]));
}

export const renderRoutes = (mainRoutes: any) => {
    const Routes = ({ isAuthorized }: any) => {
        const layouts = mainRoutes.map(({ layout: Layout, routes }: any, index: number) => {
        const subRoutes = generateFlattenRoutes(routes);

        return (
            <Route key={index} element={<Layout />}>
                <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
                    {subRoutes.map(({ component: Component, path, name }: any) => {
                        return (
                            Component && path && (<Route key={name} element={<Component />} path={path} />)
                        )
                    })}
                </Route>
            </Route>
        )});
        return <ReactRoutes>{layouts}</ReactRoutes>;
    }
    return Routes;
}