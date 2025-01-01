import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('user');
  return user ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={
            <div className="min-h-screen flex items-center justify-center p-4">
              <LoginForm />
            </div>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;