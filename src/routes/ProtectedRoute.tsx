import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, roles  }) => {
    // const { isAuthenticated, user } = useAuth();

    // if (!user) {
    //     return <Navigate to='/login' />;
    // }

    // if (roles && !roles.includes(user.role)) {
    //     return <Navigate to='/' />;
    // }

    return children;
};

export default ProtectedRoute;