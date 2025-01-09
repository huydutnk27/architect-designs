
import { lazy, useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import LayoutComponent from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import axios from 'axios';
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

// Async function to fetch categories data
const loadHome = async () => {
    return await axios.get('/api/fetchHomeData');
};

function App() {
    loadHome().then(res => {
        window.sessionStorage.setItem("HOME_DATA", JSON.stringify(res.data.home));
    });
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
                        <Route path="/admin/categories/edit" element={<CategoryDetail />} />
                    </Route>
                </Routes>
            // {/* </AuthProvider> */}
    ) 
}

export default App;
