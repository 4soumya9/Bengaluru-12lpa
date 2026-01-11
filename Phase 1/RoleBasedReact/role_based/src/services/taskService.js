
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Helper to simulate random dates for demonstration
const getRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2025, 0, 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const taskService = {
    getTasks: async (userId) => {
        try {
            const response = await fetch(`${API_URL}?userId=${userId}`);
            const data = await response.json();

            // Enhance data with random due dates and map status since API only has 'completed' boolean
            return data.map(task => ({
                ...task,
                dueDate: getRandomDate().toISOString(),
                status: task.completed ? 'Completed' : 'Pending', // JSONPlaceholder only has boolean completed
                description: 'This is a sample description for the task as the API does not provide one.'
            })).slice(0, 10); // Limit to 10 for cleaner UI
        } catch (error) {
            throw error;
        }
    },

    getTask: async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        const task = await response.json();
        return {
            ...task,
            dueDate: getRandomDate().toISOString(),
            status: task.completed ? 'Completed' : 'Pending',
            description: 'This is a sample description for the task as the API does not provide one.'
        };
    },

    createTask: async (task) => {
        // Mock API call
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return response.json();
    },

    updateTask: async (id, task) => {
        // Mock API call
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return response.json();
    },

    deleteTask: async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    }
};
