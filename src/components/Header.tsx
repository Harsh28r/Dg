import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {user.role?.replace('_', ' ')}
        </span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}