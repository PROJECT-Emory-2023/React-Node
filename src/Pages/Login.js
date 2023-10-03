import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
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

    return(
        <div className = "form-container-login">
            <h1 className='header'>Welcome</h1>
            <form className = 'login-form' onSubmit = {onSubmit}>

                <label htmlFor = "Username">Username:</label>
                <input 
                id = 'Username'
                placeholder="ex: example@gmail.com"
                value = {username}
                onChange = {(event) => setUsername(event.target.value)}
                ></input>

                <label htmlFor = "password">Password:</label>
                <input 
                id = 'password'
                placeholder = "*********" 
                value = {password}
                onChange = {(event) => setPassword(event.target.value)}
                ></input>

                <button type='submit'>Login</button>
            </form>

            <button className="link-button">Don't have an account? Register here.</button>

        </div>

    );
};

export default Login;
