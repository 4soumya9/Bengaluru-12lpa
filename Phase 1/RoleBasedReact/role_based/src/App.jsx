import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskListPage from './pages/TaskListPage';
import TaskFormPage from './pages/TaskFormPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/tasks" element={
              <ProtectedRoute>
                <TaskListPage />
              </ProtectedRoute>
            } />

            <Route path="/tasks/new" element={
              <ProtectedRoute>
                <TaskFormPage />
              </ProtectedRoute>
            } />

            <Route path="/tasks/:id" element={
              <ProtectedRoute>
                <TaskFormPage />
              </ProtectedRoute>
            } />

            <Route path="/admin" element={
              <ProtectedRoute roles={['Admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            {/* Redirect root to tasks */}
            <Route path="/" element={<Navigate to="/tasks" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
