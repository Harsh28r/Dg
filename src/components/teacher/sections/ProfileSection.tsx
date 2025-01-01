import { Mail, Phone, Building2, GraduationCap, BookOpen } from 'lucide-react';

export function ProfileSection() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">
              {user.name?.charAt(0) || 'T'}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">Mathematics Teacher</p>
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
            <Building2 size={18} />
            <span>Room 204, Main Building</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Academic Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <GraduationCap size={18} />
            <div>
              <p className="font-medium">Masters in Mathematics</p>
              <p className="text-sm text-gray-500">Stanford University, 2018</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <BookOpen size={18} />
            <div>
              <p className="font-medium">Current Teaching</p>
              <p className="text-sm text-gray-500">Advanced Mathematics, Grades 11-12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}