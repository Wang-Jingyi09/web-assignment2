import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // const validPassword = passwordRegEx.test(password);

        // if (!validPassword) {
        //     setPasswordError("Password must contain at least 8 characters, including one letter, one number and one special character. Please try again.");
        //     return;
        // }
        if (!passwordRegEx.test(password)) {
            setPasswordError("Password must contain at least 8 characters, including one letter, one number and one special character.");
            return;
        }
        if (password !== passwordAgain) {
            setPasswordError("Passwords do not match.");
            return;
        }

        // context.register(userName, password);
        // setRegistered(true);
        context.register(userName, password)
            .then(success => {
                if (success) {
                    setRegistered(true);
                } else {
                    setPasswordError("Registration failed. Please try again.");
                }
            })
            .catch(error => {
                setPasswordError(error.message || "An unexpected error occurred. Please try again.");

            });
    }

    if (registered === true) {
        return <Navigate to="/login" replace = {true}/>;
    }

    return (
        <>
            <h2>SignUp page</h2>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

            <p>You must register a username and password to log in </p>
            <p>Password must contain at least 8 characters, including one letter, one number and one special character.</p>
            <input value={userName} placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input value={password} type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
                setPasswordAgain(e.target.value);
            }}></input><br />
            {/* Login web form  */}

            <button onClick={register}>Register</button>
        </>
    );
};

export default SignUpPage;