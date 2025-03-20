import React, { useContext, useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { signUp } from '../auth';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { isUserLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await signUp(email, password)
        }
    }

    return (
        <>
            {isUserLoggedIn && (<Navigate to={'/'} replace={true} />)}

            <main className='signup-wrapper'>
                <div>
                    <div>
                        <div>
                            <h3>Create a New Account</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>

                        <div>
                            <label>Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                            />
                        </div>

                        {errorMessage && (
                            <span>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div>
                            Already have an account? {'   '}
                            <Link to={'/login'}>Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default SignUp
