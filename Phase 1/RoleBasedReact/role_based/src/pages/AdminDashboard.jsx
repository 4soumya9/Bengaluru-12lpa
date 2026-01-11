import { useSelector, useDispatch } from 'react-redux';
import { selectLogs, clearLogs } from '../store/activitySlice';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const logs = useSelector(selectLogs);
    const dispatch = useDispatch();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button onClick={() => dispatch(clearLogs())} className="btn-secondary">
                    Clear Logs
                </button>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <h2>Recent Activity</h2>
                    <div className="activity-list">
                        {logs.length === 0 ? (
                            <p>No activity recorded yet.</p>
                        ) : (
                            logs.map(log => (
                                <div key={log.id} className="log-entry">
                                    <div className="log-meta">
                                        <span className="log-user">{log.user}</span>
                                        <span className="log-time">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="log-action">{log.action}</div>
                                    <div className="log-details">{log.details}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
