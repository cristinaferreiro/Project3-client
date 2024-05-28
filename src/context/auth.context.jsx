import { createContext, useEffect, useState } from "react"
import authServices from "../services/auth.services"
import React, { useState, useEffect } from "react"
import axios from 'axios'
const API_URL = 'http://localhost:5005'

const AuthContext = React.createContext()


function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {

            authServices
                .verifyUser(token)
                .then(({ data }) =>
                    setLoggedUser(data))
            setIsLoading(false)
                .catch(err => logout())
        }
    }

    const logout = () => {
        setLoggedUser(null)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }