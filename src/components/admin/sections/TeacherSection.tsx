import { useState } from 'react';
import { Search, User, Mail, Phone, Edit, Trash2, Plus, Filter } from 'lucide-react';

type Teacher = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  joiningDate: string;
  classes: string[];
  status: 'active' | 'on-leave';
};

const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@school.com',
    phone: '+1 (555) 123-4567',
    subject: 'Mathematics',
    joiningDate: '2022-08-15',
    classes: ['Grade 11-A', 'Grade 12-B'],
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@school.com',
    phone: '+1 (555) 234-5678',
    subject: 'Physics',
    joiningDate: '2021-07-01',
    classes: ['Grade 11-A', 'Grade 11-B'],
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.b@school.com',
    phone: '+1 (555) 345-6789',
    subject: 'Chemistry',
    joiningDate: '2023-01-10',
    classes: ['Grade 12-A', 'Grade 12-C'],
    status: 'on-leave'
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'emma.d@school.com',
    phone: '+1 (555) 456-7890',
    subject: 'Biology',
    joiningDate: '2022-03-20',
    classes: ['Grade 11-C', 'Grade 12-A'],
    status: 'active'
  },
  {
    id: '5',
    name: 'Robert Wilson',
    email: 'robert.w@school.com',
    phone: '+1 (555) 567-8901',
    subject: 'English',
    joiningDate: '2021-09-05',
    classes: ['Grade 11-B', 'Grade 12-B'],
    status: 'active'
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    email: 'lisa.a@school.com',
    phone: '+1 (555) 678-9012',
    subject: 'History',
    joiningDate: '2023-04-15',
    classes: ['Grade 11-A', 'Grade 12-C'],
    status: 'on-leave'
  },
  {
    id: '7',
    name: 'David Martinez',
    email: 'david.m@school.com',
    phone: '+1 (555) 789-0123',
    subject: 'Computer Science',
    joiningDate: '2022-11-30',
    classes: ['Grade 11-C', 'Grade 12-A'],
    status: 'active'
  },
  {
    id: '8',
    name: 'Jennifer Taylor',
    email: 'jennifer.t@school.com',
    phone: '+1 (555) 890-1234',
    subject: 'Art',
    joiningDate: '2023-02-28',
    classes: ['Grade 11-B', 'Grade 12-B'],
    status: 'active'
  }
];

interface TeacherSectionProps {
  instituteId: string;
}

export function TeacherSection({ instituteId }: TeacherSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'on-leave'>('all');
  const [subjectFilter, setSubjectFilter] = useState('all');

  const filteredTeachers = mockTeachers.filter(teacher => {
    const matchesSearch = 
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' ? true : teacher.status === statusFilter;
    
    const matchesSubject = subjectFilter === 'all' 
      ? true 
      : teacher.subject === subjectFilter;

    return matchesSearch && matchesStatus && matchesSubject;
  });

  const subjects = Array.from(new Set(mockTeachers.map(t => t.subject)));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Teachers</h2>
          <p className="mt-1 text-sm text-gray-500">Manage teacher information and assignments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          Add Teacher
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'on-leave')}
            className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="on-leave">On Leave</option>
          </select>
        </div>

        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Subjects</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Classes
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
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{teacher.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{teacher.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{teacher.subject}</div>
                    <div className="text-xs text-gray-500">Since {teacher.joiningDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((className, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                        >
                          {className}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        teacher.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {teacher.status === 'active' ? 'Active' : 'On Leave'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
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