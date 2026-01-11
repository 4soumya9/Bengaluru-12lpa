import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTasksAsync,
    updateTaskAsync,
    selectAllTasks,
    selectTaskStatus,
    setFilter,
    setSearch,
    setSort
} from '../store/taskSlice';
import { selectCurrentUser } from '../store/authSlice';
import './TaskListPage.css';

const TaskListPage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const status = useSelector(selectTaskStatus);
    const { filter, search, sort } = useSelector(state => state.tasks);
    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasksAsync());
        }
    }, [status, dispatch]);

    const handleStatusChange = (id, newStatus) => {
        dispatch(updateTaskAsync({ id, data: { status: newStatus, completed: newStatus === 'Completed' } }));
    };

    const handleSearchChange = (e) => dispatch(setSearch(e.target.value));
    const handleFilterChange = (e) => dispatch(setFilter(e.target.value));
    const handleSortChange = () => dispatch(setSort(sort === 'asc' ? 'desc' : 'asc'));

    if (status === 'loading' && tasks.length === 0) return <div className="loading">Loading tasks...</div>;

    return (
        <div className="task-list-container">
            <div className="task-header">
                <h1>{user.role === 'Admin' ? 'All User Tasks' : 'My Tasks'}</h1>
                <Link to="/tasks/new" className="btn-primary">Add New Task</Link>
            </div>

            <div className="task-controls">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                />

                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="filter-select"
                >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <button
                    onClick={handleSortChange}
                    className="sort-btn"
                >
                    Sort by Date ({sort === 'asc' ? 'Oldest' : 'Newest'})
                </button>
            </div>

            <div className="tasks-grid">
                {tasks.map(task => (
                    <div key={task.id} className={`task-card ${task.status.toLowerCase().replace(' ', '-')}`}>
                        <div className="task-card-header">
                            <h3>{task.title}</h3>
                            <span className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                                {task.status}
                            </span>
                        </div>
                        {user.role === 'Admin' && (
                            <div className="task-author">
                                <small>User ID: {task.userId}</small>
                            </div>
                        )}
                        <p className="task-desc">{task.description}</p>
                        <div className="task-meta">
                            <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                        <div className="task-actions">
                            {/* Everyone can edit their own/viewed tasks if incomplete. Admin can edit all. */}
                            {task.status !== 'Completed' && (
                                <Link to={`/tasks/${task.id}`} className="btn-secondary">Edit</Link>
                            )}
                            {task.status !== 'Completed' && (
                                <button onClick={() => handleStatusChange(task.id, 'Completed')} className="btn-success">
                                    Mark Complete
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                {tasks.length === 0 && (
                    <p className="no-tasks">No tasks found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default TaskListPage;
