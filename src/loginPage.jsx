import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { data } from "./mail.password";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const mailChangeHnd = (event) => {
        setMail(event.target.value);
    };

    const passwordChangeHnd = (event) => {
        setPassword(event.target.value);
    };

    const submitFunc = (e) => {
        e.preventDefault();
        if (mail === data.mail && password === data.password) {
            sessionStorage.setItem("isLoggedIn", "true");
            navigate("/home");  
        } else {
            console.log("Неправильный логин или пароль");
        }
    };

    return (
        <div className="login-form-main">
            <form onSubmit={submitFunc} className="login-form">
                <input className="mail-input" type="email" onChange={mailChangeHnd} placeholder="Email Address" value={mail} />
                <input className="password-input" type="password" onChange={passwordChangeHnd} placeholder="Password" value={password} />
                <div className="checkbox-block">
                    <input type="checkbox" />
                    <label>Remember me</label>
                </div>
                <button className="login-button" type="submit">Login</button>
                <a href="#" className="forgot-button" >Forgotten password?</a>
                <button className="create-button">Create New Account</button>
            </form>
        </div>
    );
};

export default LoginPage;