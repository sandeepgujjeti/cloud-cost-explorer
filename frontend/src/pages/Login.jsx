import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../auth';
import "../CSS/auth.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent form submission default behavior
        try {
            console.log("Handling login");
            const user = await logIn(email, password);
            if (!user) {
                throw new Error("User not found");
            } else {
                navigate("/overall");
                console.log("User logged in successfully");
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-wrapper">
            <main className="login-main">
                <div className="login-box">
                    <div className="text-center">
                        <h1>Login</h1>
                    </div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className='input-field'>
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='input-field'>
                            <label>Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errorMessage && <span className='error-message'>{errorMessage}</span>}
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="alternative-link">Don't have an account? <Link to={'/signup'}>Sign up</Link></div>
                </div>
            </main>
        </div>
    );
}

export default Login;