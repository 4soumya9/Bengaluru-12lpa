
export const authService = {
    login: async (username, password) => {
        try {
            // Fetch users from JSONPlaceholder to simulate authentication
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
            const users = await response.json();

            if (users.length > 0) {
                const user = users[0];

                // Mock password validation
                // In a real app, you'd hash the password and compare
                // For this demo, valid password is "123456" for simplicity
                if (password !== '123456') {
                    throw new Error('Invalid password');
                }

                // Create a mock token
                const token = btoa(JSON.stringify({ id: user.id, username: user.username }));
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};
