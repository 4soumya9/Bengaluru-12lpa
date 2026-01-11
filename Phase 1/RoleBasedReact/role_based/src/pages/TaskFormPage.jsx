import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAsync, updateTaskAsync, selectAllTasks } from '../store/taskSlice';
import './TaskFormPage.css';

const TaskFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isEditMode = !!id;

    // Select task from store if editing
    const existingTask = useSelector(state =>
        id ? state.tasks.items.find(t => t.id === parseInt(id) || t.id === id) : null
    );

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'Pending',
        dueDate: new Date().toISOString().split('T')[0]
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEditMode && existingTask) {
            setFormData({
                title: existingTask.title,
                description: existingTask.description || '',
                status: existingTask.status,
                dueDate: existingTask.dueDate ? new Date(existingTask.dueDate).toISOString().split('T')[0] : ''
            });
        }
    }, [isEditMode, existingTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title) {
            setError("Title is required");
            return;
        }

        setLoading(true);
        setError('');

        try {
            if (isEditMode) {
                await dispatch(updateTaskAsync({ id: existingTask.id, data: formData })).unwrap();
            } else {
                await dispatch(addTaskAsync(formData)).unwrap();
            }
            navigate('/tasks');
        } catch (err) {
            setError('Failed to save task: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>{isEditMode ? 'Edit Task' : 'Create New Task'}</h1>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={() => navigate('/tasks')} className="btn-cancel">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="btn-submit">
                            {loading ? 'Saving...' : (isEditMode ? 'Update Task' : 'Create Task')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskFormPage;
