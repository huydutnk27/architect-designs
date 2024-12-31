
import { cache, lazy, Suspense, useEffect, useState } from 'react';
import { AuthProvider } from './hooks/useAuth';
import LayoutComponent from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import axios from 'axios';
import HomeComponent from './components/Home';


const AdminHome = lazy(() => import('./pages/admin/Home'));
const Category = lazy(() => import('./pages/admin/Category'));
// const HomeComponent = lazy(() => import('./pages/home'));
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
const loadHome = async () => {
    return await axios.get('/api/fetchHomeData');
};

function App() {
    // const messagePromise = loadHome();
    // const [messagePromise, setMessagePromise] = useState(loadHome());
    loadHome().then(res => {
        console.log(res.data.home);
        window.sessionStorage.setItem("HOME_DATA", JSON.stringify(res.data.home));
    });
    useEffect(() => {
        const loadScript = async() => {
            // await AddLibrary('./assets/js/jquery.min.js');
            // await AddLibrary('./assets/js/plugins.js');
            // await AddLibrary('./assets/js/core.js');
            
            await AddLibrary('./assets/js/head-e447dd.js');
            await AddLibrary('./assets/js/bottom-ac404e.js');
            await AddLibrary('./assets/js/scripts.js');
        }
        loadScript();
        // setMessagePromise(loadHome());
        // load cache function
        return () => {};
    }, []);
    // 
    
    return (
            // {/* <AuthProvider> */}
                <Routes>
                    <Route path="/" element={<LayoutComponent />}>
                        <Route path="/" element={<HomeComponent />} />
                        {/* <Route path="/detail" element={<ProductDetail />} /> */}
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
