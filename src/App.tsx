
import { lazy, useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import LayoutComponent from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import ProductList from './components/product/ProductList';
import ProductDetailAdmin from './pages/admin/ProductDetail';
import ProductListAdmin from './pages/admin/ProductList';
// import ProductDetail from './components/product/ProductDetail';


const AdminHome = lazy(() => import('./pages/admin/Home'));
// const Category = lazy(() => import('./pages/admin/Category'));
const HomeComponent = lazy(() => import('./components/Home'));
const CategoryDetail = lazy(() => import('./pages/admin/CategoryDetail'));
const ProductDetail = lazy(() => import('./components/product/ProductDetail'));

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

function App() {
    
    useEffect(() => {
        const loadScript = async() => {
            await AddLibrary('./assets/js/head-e447dd.js');
            await AddLibrary('./assets/js/bottom-ac404e.js');
            await AddLibrary('./assets/js/scripts.js');
            await AddLibrary('./assets/js/product-detail.js');
        }
        loadScript();
        return () => {};
    }, []);
    // 
    
    return (
            // {/* <AuthProvider> */}
                <Routes>
                    <Route path="/" element={<LayoutComponent />}>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/list" element={<ProductList />} />
                        <Route path="/detail" element={<ProductDetail />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    {/* protected routes */}
                    <Route path="/admin" element={
                        // <ProtectedRoute roles={[ROLES.ADMIN]}>
                            <AdminLayout />
                        // </ProtectedRoute>
                    }>
                        <Route path="/admin/home" element={<AdminHome />} />
                        <Route path="/admin/product" element={<ProductListAdmin />} />
                        <Route path="/admin/product/edit" element={<ProductDetailAdmin />} />
                    </Route>
                </Routes>
            // {/* </AuthProvider> */}
    ) 
}

export default App;
