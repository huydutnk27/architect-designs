import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import React from 'react';
import LayoutComponent from '../layout/Layout';
import Login from '../pages/login';
import ProtectedRoute from './ProtectedRoute';
import { ROLES } from '../hooks/roles';
import AdminLayout from '../layout/AdminLayout';
import Category from '../pages/admin/Category';

// const Dashboard = React.lazy(() => import('../components/Dashboard'));
// const Home = React.lazy(() => import('../components/Home'));
// const About = React.lazy(() => import('../components/About'));

const routes = createRoutesFromElements(
    <Route>
        <Route path="/login" element={<Login />} />
        {/* protected routes */}
        <Route path="/admin" element={
            <ProtectedRoute roles={[ROLES.ADMIN]}>
                <AdminLayout />
            </ProtectedRoute>
        }>
            <Route path="/admin/categories" element={<Category />} />
        </Route>
    </Route>
    
);

export const routers = createBrowserRouter(routes);
