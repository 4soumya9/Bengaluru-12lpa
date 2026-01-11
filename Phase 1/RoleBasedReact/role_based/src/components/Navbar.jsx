import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../store/authSlice';
import './Navbar.css';

const Navbar = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    if (!user) return null;

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/tasks">Task Manager</Link>
                {user.role === 'Admin' && (
                    <Link to="/admin" className="nav-link-admin" style={{ fontSize: '1rem', marginLeft: '1rem', fontWeight: '500' }}>Admin Dashboard</Link>
                )}
            </div>
            <div className="nav-user">
                <div className="user-info">
                    <span className="user-name">{user.name || user.username}</span>
                    <span className="user-role-badge">{user.role}</span>
                </div>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
