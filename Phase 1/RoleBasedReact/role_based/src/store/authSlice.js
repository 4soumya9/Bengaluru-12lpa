import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../services/authService';
import { logAction } from './activitySlice';

// Helper to determine role based on username (Mock Logic)
const determineRole = (username) => {
    return username.toLowerCase() === 'admin' ? 'Admin' : 'User';
};

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { dispatch, rejectWithValue }) => {
        try {
            // Check Local Storage for registered users first
            const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
            const localUser = registeredUsers.find(u => u.username === username);

            let user;
            if (localUser) {
                if (localUser.password !== password) {
                    throw new Error('Invalid password');
                }
                user = { ...localUser, id: Date.now() }; // Mock ID
            } else {
                // Fallback to JSONPlaceholder mock
                user = await authService.login(username, password);
            }

            // Assign Role
            user.role = user.role || determineRole(user.username);

            // Log Activity
            dispatch(logAction({ user: user.username, action: 'LOGIN', details: `User ${user.username} logged in as ${user.role}` }));

            // Persist for session
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const registerAsync = createAsyncThunk(
    'auth/register',
    async ({ name, username, password, role }, { dispatch, rejectWithValue }) => {
        try {
            const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');

            if (registeredUsers.find(u => u.username === username)) {
                throw new Error('Username already exists');
            }

            const newUser = { name, username, password, role: role || 'User' };
            registeredUsers.push(newUser);
            localStorage.setItem('registered_users', JSON.stringify(registeredUsers));

            dispatch(logAction({ user: username, action: 'REGISTER', details: `New user ${username} registered as ${newUser.role}` }));

            // Auto login after register
            return { ...newUser, id: Date.now() };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    user: authService.getCurrentUser(),
    status: 'idle',
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            if (state.user) {
                // We can't dispatch thunk here easily without middleware complexity, 
                // but typically logout is simple sync action for state
            }
            authService.logout();
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload)); // Ensure session persistence
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export default authSlice.reducer;
