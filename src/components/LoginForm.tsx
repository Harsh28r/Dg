import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, GraduationCap, User2, UserCircle } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';
import type { UserRole } from '../types/auth';

interface RoleCard {
  role: UserRole;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const roleCards: RoleCard[] = [
  {
    role: 'SUPER_ADMIN',
    label: 'Super Admin',
    description: 'Manage multiple institutes and system-wide settings',
    icon: <Building2 size={24} />,
    color: 'purple'
  },
  {
    role: 'ADMIN',
    label: 'Institute Admin',
    description: 'Manage your institute\'s teachers, students and resources',
    icon: <Users size={24} />,
    color: 'blue'
  },
  {
    role: 'TEACHER',
    label: 'Teacher',
    description: 'Access your schedule, students and teaching resources',
    icon: <UserCircle size={24} />,
    color: 'green'
  },
  {
    role: 'STUDENT',
    label: 'Student',
    description: 'View your classes, assignments and progress',
    icon: <GraduationCap size={24} />,
    color: 'orange'
  },
  {
    role: 'PARENT',
    label: 'Parent',
    description: 'Monitor your child\'s progress and activities',
    icon: <User2 size={24} />,
    color: 'red'
  }
];

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole | ''>('');
  const [error, setError] = useState('');

  const roleUsers = mockUsers.reduce((acc, user) => {
    if (!acc[user.role]) {
      acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
  }, {} as Record<string, typeof mockUsers>);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = mockUsers.find(u => u.email === email && u.role === selectedRole);
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Invalid email for selected role.');
    }
  };

  const getColorClasses = (color: string, isSelected: boolean) => {
    const baseClasses = 'transition-all duration-200';
    const colorMap = {
      purple: isSelected ? 'border-purple-500 bg-purple-50 text-purple-700' : 'hover:border-purple-200 hover:bg-purple-50',
      blue: isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'hover:border-blue-200 hover:bg-blue-50',
      green: isSelected ? 'border-green-500 bg-green-50 text-green-700' : 'hover:border-green-200 hover:bg-green-50',
      orange: isSelected ? 'border-orange-500 bg-orange-50 text-orange-700' : 'hover:border-orange-200 hover:bg-orange-50',
      red: isSelected ? 'border-red-500 bg-red-50 text-red-700' : 'hover:border-red-200 hover:bg-red-50',
    };
    
    return `${baseClasses} ${colorMap[color as keyof typeof colorMap]}`;
  };

  return (
    <div className="w-full max-w-4xl space-y-8 p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <img src="/logo.png" alt="DigiSir" className="h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Welcome to DigiSir</h1>
        <p className="mt-2 text-gray-600">Please select your role and sign in to continue</p>
      </div>
      
      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roleCards.map((card) => (
            <button
              key={card.role}
              type="button"
              onClick={() => setSelectedRole(card.role)}
              className={`p-6 border-2 rounded-xl text-left cursor-pointer 
                ${getColorClasses(card.color, selectedRole === card.role)}
                ${selectedRole && selectedRole !== card.role ? 'opacity-50' : 'opacity-100'}`}
            >
              <div className={`mb-3 ${selectedRole === card.role ? `text-${card.color}-600` : 'text-gray-400'}`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{card.label}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </button>
          ))}
        </div>

        {/* Email Input - Only shown after role selection */}
        {selectedRole && (
          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="text-sm text-gray-600">
              <p>Available test emails for {roleCards.find(r => r.role === selectedRole)?.label}:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                {roleUsers[selectedRole]?.map(user => (
                  <li key={user.email}>{user.email}</li>
                ))}
              </ul>
            </div>

            <button
              type="submit"
              disabled={!selectedRole || !email}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          </div>
        )}
      </form>
    </div>
  );
}