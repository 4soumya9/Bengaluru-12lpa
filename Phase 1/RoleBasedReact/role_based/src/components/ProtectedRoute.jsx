import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/authSlice';

const ProtectedRoute = ({ children, roles }) => {
    const user = useSelector(selectCurrentUser);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/tasks" replace />;
    }

    return children;
};

export default ProtectedRoute;
