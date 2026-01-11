import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectAuthStatus, selectAuthError } from '../store/authSlice';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);

    const from = location.state?.from?.pathname || '/tasks';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginAsync({ username, password }));
        if (loginAsync.fulfilled.match(resultAction)) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome Back</h1>
                <p className="login-subtitle">Enter your credentials</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="e.g. Bret or admin"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="123456"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Logging in...' : 'Login'}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Link to="/register" style={{ color: '#3182ce' }}>Need an account? Register</Link>
                    </div>
                </form>

                <div className="login-hint">
                    <p>Demo Credentials:</p>
                    <div className="hint-row">Admin: <code>admin</code> / <code>123456</code></div>
                    <div className="hint-row">User: <code>Bret</code> / <code>123456</code></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
