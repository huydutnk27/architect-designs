// Pages
import { renderRoutes } from './generate-routes';
import AdminLayout from '../layout/AdminLayout';
import LayoutComponent from '../layout/Layout';
import HomeComponent from '../components/Home';
import Login from '../pages/Login';
import Category from '../pages/admin/Category';
import CategoryDetail from '../pages/admin/CategoryDetail';

const routes = [
    {
        layout: LayoutComponent,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: HomeComponent,
                path: '/'
            }
        ]
    },
    {
        layout: AdminLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: Login,
                path: '/login',
                isPublic: true,
            },
            {
                name: 'category',
                title: 'Category',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'list-category',
                        title: 'List of Category',
                        hasSiderLink: true,
                        component: Category,
                        path: '/categories'
                    },
                    {
                        name: 'edit-category',
                        title: 'Edit category',
                        hasSiderLink: true,
                        component: CategoryDetail,
                        path: '/categories/edit'
                    }
                ]
            }
        ]
    }
];

// Just add this line
export const Routes = renderRoutes(routes);