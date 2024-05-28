import React, { useState, useEffect } from "react";
import axios from 'axios';
const API_URL = 'http://localhost:5005';
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        authenticateUser();
    }, []);

    const storeToken = (tokenValue) => {
        localStorage.setItem('authToken', tokenValue);
    };

    const authenticateUser = () => {

        const storedToken = localStorage.getItem('authToken');

        if (storedToken) {

            axios
                .get(`${API_URL}/api/auth/verify`, {
                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then((response) => {
                    const userInfo = response.data;
                    setIsLoggedIn(true);
                    setUser(userInfo);
                    setIsLoading(false);
                })
                .catch((err) => {
                    logout()
                });
        } else {
            logout();
        }
    };



    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('authToken');
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout }}>
            {isLoading ? <div>Loading...</div> : props.children}
        </AuthContext.Provider>
    );
}

export { AuthProviderWrapper, AuthContext };
