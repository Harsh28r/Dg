import { Mail, Phone, User, Home } from 'lucide-react';

export function ProfileSection() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">
              {user.name?.charAt(0) || 'P'}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">Parent</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={18} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone size={18} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Home size={18} />
            <span>123 Main Street, Apt 4B, New York, NY 10001</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Emergency Contact</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <User size={18} />
            <div>
              <p className="font-medium">Sarah Johnson (Spouse)</p>
              <p className="text-sm text-gray-500">+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}