import React, { useState, createContext } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const existingToken = localStorage.getItem("token");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [, setAuthToken] = useState(existingToken);
    const [userName, setUserName] = useState("");
    const [authError, setAuthError] = useState(null); // 新增一个状态来存储认证错误

    //Function to put JWT token in local storage.
    const setToken = (data) => {
        localStorage.setItem("token", data);
        setAuthToken(data);
    }

    const authenticate = async (username, password) => {
        try {
            const result = await login(username, password);
            if (result.token) {
                setToken(result.token)
                setIsAuthenticated(true);
                setUserName(username);
                setAuthError(null);
            } else {
                throw new Error('Invalid login credentials'); 
            }
        } catch (error) {
            setAuthError(error.message);
        }
    };

    const register = async (username, password) => {
        // const result = await signup(username, password);
        // console.log(result.code);
        // return (result.code === 201) ? true : false;
        try {
            const result = await signup(username, password);
            if (result.code === 201) {
                return true;
            } else {
                throw new Error('Registration failed'); 
            }
        } catch (error) {
            setAuthError(error.message); 
            return false;
        }
    };

    const signout = () => {
        setTimeout(() => setIsAuthenticated(false), 100);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                authenticate,
                register,
                signout,
                userName,
                authError 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;