import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import taskReducer from './taskSlice';
import activityReducer from './activitySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
        activity: activityReducer
    }
});
