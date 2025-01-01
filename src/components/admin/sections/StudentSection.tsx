import { User, Mail, Phone, Edit, Trash2, Search } from 'lucide-react';

type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  grade: string;
  section: string;
  rollNumber: string;
  parentName: string;
  parentPhone: string;
  status: 'active' | 'inactive';
};

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.j@school.com',
    phone: '+1 (555) 123-4567',
    grade: '11',
    section: 'A',
    rollNumber: '1101',
    parentName: 'John Johnson',
    parentPhone: '+1 (555) 987-6543',
    status: 'active'
  },
  {
    id: '2',
    name: 'Emma Davis',
    email: 'emma.d@school.com',
    phone: '+1 (555) 234-5678',
    grade: '11',
    section: 'B',
    rollNumber: '1102',
    parentName: 'Sarah Davis',
    parentPhone: '+1 (555) 876-5432',
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Wilson',
    email: 'michael.w@school.com',
    phone: '+1 (555) 345-6789',
    grade: '12',
    section: 'A',
    rollNumber: '1201',
    parentName: 'Robert Wilson',
    parentPhone: '+1 (555) 765-4321',
    status: 'inactive'
  }
];

export function StudentSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Students</h2>
          <p className="mt-1 text-sm text-gray-500">Manage student information and records</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Student
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>All Grades</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </select>
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>All Sections</option>
          <option>Section A</option>
          <option>Section B</option>
        </select>
      </div>

      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{student.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{student.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Grade {student.grade}-{student.section}</div>
                    <div className="text-xs text-gray-500">Roll No: {student.rollNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.parentName}</div>
                    <div className="text-xs text-gray-500">{student.parentPhone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        student.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {student.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}