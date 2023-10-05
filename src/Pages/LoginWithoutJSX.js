import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Success!!!");
        console.log(username);
        console.log(password);

        navigate('/home', { state: { username, password } });
    };

    return React.createElement(
        'div', 
        { className: 'form-container-login' }, 
        React.createElement('h1', { className: 'header' }, 'Welcome'),
        React.createElement(
            'form', 
            { className: 'login-form', onSubmit: onSubmit }, 
            React.createElement('label', { htmlFor: 'Username' }, 'Username:'),
            React.createElement('input', {
                id: 'Username',
                placeholder: "ex: example@gmail.com",
                value: username,
                onChange: (event) => setUsername(event.target.value)
            }),
            React.createElement('label', { htmlFor: 'password' }, 'Password:'),
            React.createElement('input', {
                id: 'password',
                placeholder: "*********",
                value: password,
                onChange: (event) => setPassword(event.target.value)
            }),
            React.createElement('button', { type: 'submit' }, 'Login')
        ),
        React.createElement('button', { className: "link-button" }, "Don't have an account? Register here.")
    );
};

export default Login;
