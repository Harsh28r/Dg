import { Search, Plus, Download, Filter } from 'lucide-react';

type SalaryRecord = {
  id: string;
  employeeName: string;
  role: string;
  department: string;
  salary: number;
  lastPaid: string;
  status: 'paid' | 'pending';
};

const mockSalaryRecords: SalaryRecord[] = [
  {
    id: '1',
    employeeName: 'John Smith',
    role: 'Senior Teacher',
    department: 'Mathematics',
    salary: 5000,
    lastPaid: '2024-02-28',
    status: 'paid'
  },
  {
    id: '2',
    employeeName: 'Sarah Johnson',
    role: 'Teacher',
    department: 'Science',
    salary: 4500,
    lastPaid: '2024-02-28',
    status: 'paid'
  },
  {
    id: '3',
    employeeName: 'Michael Brown',
    role: 'Lab Assistant',
    department: 'Science',
    salary: 3000,
    lastPaid: '2024-02-28',
    status: 'pending'
  }
];

export function SalaryManagementTab() {
  return (
    <div className="space-y-6">
      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <select className="px-3 py-2 border rounded-md bg-white">
            <option>All Departments</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
          </select>
          <select className="px-3 py-2 border rounded-md bg-white">
            <option>All Roles</option>
            <option>Senior Teacher</option>
            <option>Teacher</option>
            <option>Lab Assistant</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus size={20} />
            Add Record
          </button>
        </div>
      </div>

      {/* Salary Records Table */}
      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Paid
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
              {mockSalaryRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {record.employeeName}
                      </div>
                      <div className="text-sm text-gray-500">{record.role}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{record.department}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      ${record.salary}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{record.lastPaid}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        record.status === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Download size={16} />
                    </button>
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