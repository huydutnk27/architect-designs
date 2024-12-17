/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useState } from 'react';
import { ROLES } from './roles';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const AuthContext =  createContext({
    isAuthenticated: false,
    user: null,
    login: (username: string, password: string) => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useLocalStorage('admin', null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = (username: string, password: string) => {
        // Perform your authentication logic here
        if (username === 'admin' && password === 'password') {
            setIsAuthenticated(true);
            setUser({ username, role: ROLES.ADMIN });
            navigate("/admin");
        }
    };

    // call this function to sign out logged in user
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = useMemo(
        () => ({
            isAuthenticated,
            user,
            login,
            logout,
        }),
        [user]
      );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);