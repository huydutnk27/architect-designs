/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useState } from 'react';
import { ROLES } from './roles';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import axios from 'axios';

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
        axios.post("/api/checkLogin", {
            username,
            password,
        }).then((response) => {
            console.log(response);
             // Redirect to admin page when user authenticated success.
            if(response && response.data.isTrust) {
                setIsAuthenticated(true);
                setUser({ username, role: ROLES.ADMIN });
                navigate("/admin/categories");
            }
        });
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