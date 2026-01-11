import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync, selectAuthStatus, selectAuthError } from '../store/authSlice';
import './LoginPage.css'; // Reuse login styles

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        role: 'User' // Default to User
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(registerAsync(formData));
        if (registerAsync.fulfilled.match(resultAction)) {
            navigate('/tasks');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Create Account</h1>
                <p className="login-subtitle">Join the task management system</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role (Demo Purpose)</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Creating Account...' : 'Register'}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <Link to="/login" style={{ color: '#3182ce' }}>Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
