import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../auth';

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
                        <h3>Welcome Back</h3>
                    </div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
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
                    <p className="text-center">Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
                </div>
            </main>
        </div>
    );
}

export default Login;