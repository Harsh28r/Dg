import { useState } from 'react';
import { Search, Filter, Calendar, CheckCircle, XCircle, Clock, UserCircle } from 'lucide-react';

type AttendanceRecord = {
  id: string;
  name: string;
  role: 'teacher' | 'student';
  grade?: string;
  section?: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  checkIn?: string;
  checkOut?: string;
};

const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'teacher',
    date: '2024-03-15',
    status: 'present',
    checkIn: '07:45 AM',
    checkOut: '03:30 PM'
  },
  {
    id: '2',
    name: 'Alex Johnson',
    role: 'student',
    grade: '11',
    section: 'A',
    date: '2024-03-15',
    status: 'late',
    checkIn: '08:45 AM',
    checkOut: '03:30 PM'
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    role: 'teacher',
    date: '2024-03-15',
    status: 'present',
    checkIn: '07:50 AM',
    checkOut: '03:30 PM'
  },
  {
    id: '4',
    name: 'Emma Davis',
    role: 'student',
    grade: '11',
    section: 'B',
    date: '2024-03-15',
    status: 'absent'
  },
  {
    id: '5',
    name: 'Michael Wilson',
    role: 'teacher',
    date: '2024-03-15',
    status: 'late',
    checkIn: '08:30 AM',
    checkOut: '03:30 PM'
  }
];

export function AttendanceSection() {
  const [activeTab, setActiveTab] = useState<'teachers' | 'students'>('teachers');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'present' | 'absent' | 'late'>('all');

  const filteredAttendance = mockAttendance.filter(record => {
    const matchesRole = record.role === activeTab.slice(0, -1); // Remove 's' from end
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' ? true : record.status === statusFilter;
    return matchesRole && matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'absent':
        return <XCircle className="text-red-500" size={20} />;
      case 'late':
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return null;
    }
  };

  const stats = {
    total: filteredAttendance.length,
    present: filteredAttendance.filter(r => r.status === 'present').length,
    absent: filteredAttendance.filter(r => r.status === 'absent').length,
    late: filteredAttendance.filter(r => r.status === 'late').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Attendance Management</h2>
        <p className="mt-1 text-sm text-gray-500">Monitor and manage attendance records</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <UserCircle className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-xl font-semibold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={24} />
            <div>
              <p className="text-sm text-gray-500">Present</p>
              <p className="text-xl font-semibold text-green-600">{stats.present}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <XCircle className="text-red-600" size={24} />
            <div>
              <p className="text-sm text-gray-500">Absent</p>
              <p className="text-xl font-semibold text-red-600">{stats.absent}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <Clock className="text-yellow-600" size={24} />
            <div>
              <p className="text-sm text-gray-500">Late</p>
              <p className="text-xl font-semibold text-yellow-600">{stats.late}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('teachers')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'teachers'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Teachers
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'students'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Students
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg border">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-gray-400" />
            <input
              type="date"
              defaultValue="2024-03-15"
              className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {activeTab === 'students' && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check Out
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <UserCircle className="h-6 w-6 text-gray-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{record.name}</div>
                      </div>
                    </div>
                  </td>
                  {activeTab === 'students' && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        Grade {record.grade}-{record.section}
                      </span>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(record.status)}
                      <span
                        className={`ml-2 px-2 py-1 text-xs font-medium rounded-full
                          ${record.status === 'present' ? 'bg-green-100 text-green-800' : 
                            record.status === 'absent' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'}`}
                      >
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.checkIn || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {record.checkOut || '-'}
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