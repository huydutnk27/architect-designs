
import { useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import LayoutComponent from './layout/Layout';
import Login from './pages/login';
import AdminLayout from './layout/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import { ROLES } from './hooks/roles';
import ProtectedRoute from './routes/ProtectedRoute';
import Category from './pages/admin/Category';
import CategoryDetail from './pages/admin/CategoryDetail';
import HomeComponent from './components/Home';

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
