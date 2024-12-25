
import { cache, lazy, useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import LayoutComponent from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import { ROLES } from './hooks/roles';
import ProtectedRoute from './routes/ProtectedRoute';

import Login from './pages/login';
import axios from 'axios';

const Category = lazy(() => import('./pages/admin/Category'));
const HomeComponent = lazy(() => import('./components/Home'));
const CategoryDetail = lazy(() => import('./pages/admin/CategoryDetail'));
const ProductDetail = lazy(() => import('./pages/product/index'));

// Create the function
async function AddLibrary(urlOfTheLibrary: string) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.type = 'text/javascript';
    script.async = false;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}

// Async function to fetch categories data
const loadAllCategories = cache(async () => {
    return await axios.get('/api/getAllCategories');
});

function App() {

    // load cache function
    loadAllCategories().then(res => {
        window.sessionStorage.setItem("categories", JSON.stringify(res.data.categories));
    });
    
    useEffect(() => {
        const loadScript = async() => {
            await AddLibrary('./assets/js/jquery.min.js');
            await AddLibrary('./assets/js/plugins.js');
            await AddLibrary('./assets/js/core.js');
            await AddLibrary('./assets/js/scripts.js');
        }
        loadScript();
        return () => {};
    }, []);
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/detail" element={<ProductDetail />} />
                </Route>
                <Route path="/login" element={<Login />} />
                {/* protected routes */}
                <Route path="/admin" element={
                    <ProtectedRoute roles={[ROLES.ADMIN]}>
                        <AdminLayout />
                    </ProtectedRoute>
                }>
                    <Route path="/admin/categories" element={<Category />} />
                    <Route path="/admin/categories/edit" element={<CategoryDetail />} />
                </Route>
            </Routes>
        </AuthProvider>
    ) 
}

export default App;
