// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// const API_URL = 'http://localhost:5005';
// const AuthContext = React.createContext();

// function AuthProviderWrapper(props) {

//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     const storeToken = (tokenValue) => {
//         localStorage.setItem('authToken', tokenValue);
//     };

//     const authenticateUser = () => {

//         const storedToken = localStorage.getItem('authToken');

//         if (storedToken) {

//             axios
//                 .get(`${API_URL}/api/auth/verify`, {
//                     headers: { Authorization: `Bearer ${storedToken}` }
//                 })
//                 .then((response) => {
//                     const userInfo = response.data;
//                     setIsLoggedIn(true);
//                     setUser(userInfo);
//                     setIsLoading(false);
//                 })
//                 .catch((err) => {
//                     logout()
//                 });
//         } else {
//             logout();
//         }
//     };



//     const logout = () => {
//         setUser(null);
//         setIsLoggedIn(false);
//         localStorage.removeItem('authToken');
//         setIsLoading(false);
//     };

//     return (
//         <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout }}>
//             {isLoading ? <div>Loading...</div> : props.children}
//         </AuthContext.Provider>
//     );
// }

// export { AuthProviderWrapper, AuthContext };



import { createContext, useEffect, useState } from "react";
import authServices from "../services/auth.services";

const AuthContext = createContext();

function AuthProviderWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        setIsLoading(true)

        const token = localStorage.getItem('authToken');

        if (token) {
            authServices
                .verifyUser(token)
                .then(({ data }) => {
                    setUser(data);
                    setIsLoggedIn(true);
                    setIsLoading(false)
                })
                .catch(err => logout());
        }
    };

    const storeToken = (tokenValue) => {
        localStorage.setItem('authToken', tokenValue);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false)
        localStorage.removeItem('authToken');
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };

