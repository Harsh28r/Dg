import { Mail, Phone, Building2, GraduationCap, UserCircle, Calendar } from 'lucide-react';

export function ProfileSection() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">
              {user.name?.charAt(0) || 'S'}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">Student ID: STU{user.id}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
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
            <Calendar size={18} />
            <span>Date of Birth: June 15, 2006</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Building2 size={18} />
            <span>Class: Grade 11-A</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Parent/Guardian Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <UserCircle size={18} />
            <div>
              <p className="font-medium">John Doe (Father)</p>
              <p className="text-sm text-gray-500">+1 (555) 987-6543</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={18} />
            <span>john.doe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}