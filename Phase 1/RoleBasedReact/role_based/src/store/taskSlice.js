import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { taskService } from '../services/taskService';
import { logAction } from './activitySlice';

export const fetchTasksAsync = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const user = state.auth.user;

            // In a real API, the backend handles this.
            // For mock: Admin fetches all (userId=null implies all in our logic, or we filter differently), User gets own.
            // JSONPlaceholder returns all if no filter.

            // We'll trust taskService.getTasks to handle user filter, but we need to modify service or logic here.
            // Let's modify logic:

            let data = await taskService.getTasks(user.id);

            // If Admin, for this mock, we might want to fetch *more* or different data.
            // Simulating "Admin sees all" by fetching a different set or assuming getTasks returns appropriate dataset.
            // For JSONPlaceholder, `userId` filter restricts it. If we omit it, we get all.

            if (user.role === 'Admin') {
                // Fetch ALL tasks (remove userId filter mock)
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const allTasks = await response.json();

                // Normalize
                data = allTasks.slice(0, 20).map(task => ({
                    ...task,
                    dueDate: new Date(Date.now() + Math.random() * 10000000000).toISOString(),
                    status: task.completed ? 'Completed' : 'Pending',
                    description: 'Admin view of task.'
                }));
            }

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTaskAsync = createAsyncThunk(
    'tasks/addTask',
    async (taskData, { getState, dispatch, rejectWithValue }) => {
        try {
            const state = getState();
            const user = state.auth.user;
            const newTask = await taskService.createTask({ ...taskData, userId: user.id });

            // Normalize response
            const standardizedTask = {
                ...newTask,
                id: Date.now(), // Override ID to avoid conflicts in mock list
                dueDate: taskData.dueDate,
                status: taskData.status,
                description: taskData.description
            };

            dispatch(logAction({
                user: user.username,
                action: 'CREATE_TASK',
                details: `Created task "${taskData.title}"`
            }));

            return standardizedTask;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateTaskAsync = createAsyncThunk(
    'tasks/updateTask',
    async ({ id, data }, { getState, dispatch, rejectWithValue }) => {
        try {
            const state = getState();
            const user = state.auth.user;
            await taskService.updateTask(id, data);

            dispatch(logAction({
                user: user.username,
                action: 'UPDATE_TASK',
                details: `Updated task ${id} status to ${data.status}`
            }));

            return { id, changes: data };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'tasks/deleteTask',
    async (id, { getState, dispatch, rejectWithValue }) => {
        try {
            const state = getState();
            const user = state.auth.user;

            // RBAC Check (Frontend only - backend acts as source of truth usually)
            // Admin can delete anyone's. User can only delete own.
            // For now assume UI prevents dispatch if unauthorized, or backend fails.

            await taskService.deleteTask(id);

            dispatch(logAction({
                user: user.username,
                action: 'DELETE_TASK',
                details: `Deleted task ${id}`
            }));

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        filter: 'All',
        search: '',
        sort: 'asc'
    },
    reducers: {
        setFilter: (state, action) => { state.filter = action.payload; },
        setSearch: (state, action) => { state.search = action.payload; },
        setSort: (state, action) => { state.sort = action.payload; }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksAsync.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchTasksAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTasksAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addTaskAsync.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
            })
            .addCase(updateTaskAsync.fulfilled, (state, action) => {
                const index = state.items.findIndex(t => t.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = { ...state.items[index], ...action.payload.changes };
                }
            })
            .addCase(deleteTaskAsync.fulfilled, (state, action) => {
                state.items = state.items.filter(t => t.id !== action.payload);
            });
    }
});

export const { setFilter, setSearch, setSort } = taskSlice.actions;
export const selectAllTasks = (state) => {
    let tasks = [...state.tasks.items];
    const { filter, search, sort } = state.tasks;

    if (filter !== 'All') {
        tasks = tasks.filter(t => t.status === filter);
    }
    if (search) {
        tasks = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
    }

    tasks.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return sort === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return tasks;
};
export const selectTaskStatus = (state) => state.tasks.status;
export default taskSlice.reducer;
