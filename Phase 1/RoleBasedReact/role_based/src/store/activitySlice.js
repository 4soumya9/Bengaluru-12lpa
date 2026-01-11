import { createSlice } from '@reduxjs/toolkit';

const loadLogs = () => {
    try {
        const serializedLogs = localStorage.getItem('activity_logs');
        if (serializedLogs === null) {
            return [];
        }
        return JSON.parse(serializedLogs);
    } catch (err) {
        return [];
    }
};

const initialState = {
    logs: loadLogs()
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        logAction: (state, action) => {
            const { user, action: actionName, details } = action.payload;
            const newLog = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                user: user || 'Anonymous',
                action: actionName,
                details
            };
            state.logs.unshift(newLog); // Add to beginning
            localStorage.setItem('activity_logs', JSON.stringify(state.logs));
        },
        clearLogs: (state) => {
            state.logs = [];
            localStorage.removeItem('activity_logs');
        }
    }
});

export const { logAction, clearLogs } = activitySlice.actions;
export const selectLogs = (state) => state.activity.logs;
export default activitySlice.reducer;
