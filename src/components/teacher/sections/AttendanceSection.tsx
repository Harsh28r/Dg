import { Calendar, CheckCircle, XCircle } from 'lucide-react';

type Attendance = {
  date: string;
  status: 'present' | 'absent';
  checkIn?: string;
  checkOut?: string;
};

const mockAttendance: Attendance[] = [
  { date: '2024-03-15', status: 'present', checkIn: '08:30 AM', checkOut: '04:30 PM' },
  { date: '2024-03-14', status: 'present', checkIn: '08:25 AM', checkOut: '04:45 PM' },
  { date: '2024-03-13', status: 'absent' },
  { date: '2024-03-12', status: 'present', checkIn: '08:40 AM', checkOut: '04:30 PM' },
];

export function AttendanceSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Attendance Record</h2>
        <p className="mt-1 text-sm text-gray-500">Track your attendance and working hours</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-sm font-medium text-gray-500">Present Days</h3>
          <p className="mt-2 text-3xl font-semibold text-green-600">22</p>
          <p className="mt-1 text-sm text-gray-500">This Month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-sm font-medium text-gray-500">Absent Days</h3>
          <p className="mt-2 text-3xl font-semibold text-red-600">1</p>
          <p className="mt-1 text-sm text-gray-500">This Month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-sm font-medium text-gray-500">Working Hours</h3>
          <p className="mt-2 text-3xl font-semibold text-blue-600">176</p>
          <p className="mt-1 text-sm text-gray-500">This Month</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            <h3 className="font-medium text-gray-900">Daily Records</h3>
          </div>
        </div>
        <div className="divide-y">
          {mockAttendance.map((record, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {record.status === 'present' ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <XCircle className="text-red-500" size={20} />
                )}
                <div>
                  <p className="font-medium text-gray-900">{record.date}</p>
                  {record.status === 'present' && (
                    <p className="text-sm text-gray-500">
                      {record.checkIn} - {record.checkOut}
                    </p>
                  )}
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  record.status === 'present'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}