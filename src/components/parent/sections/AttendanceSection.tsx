import { Calendar, CheckCircle, XCircle } from 'lucide-react';

type ChildAttendance = {
  id: string;
  name: string;
  attendance: {
    date: string;
    status: 'present' | 'absent' | 'late';
    checkIn?: string;
    checkOut?: string;
  }[];
};

const mockAttendance: ChildAttendance[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    attendance: [
      { date: '2024-03-15', status: 'present', checkIn: '07:55 AM', checkOut: '03:30 PM' },
      { date: '2024-03-14', status: 'present', checkIn: '08:00 AM', checkOut: '03:30 PM' },
      { date: '2024-03-13', status: 'late', checkIn: '08:45 AM', checkOut: '03:30 PM' },
      { date: '2024-03-12', status: 'absent' },
    ]
  },
  {
    id: '2',
    name: 'Emma Johnson',
    attendance: [
      { date: '2024-03-15', status: 'present', checkIn: '07:50 AM', checkOut: '03:30 PM' },
      { date: '2024-03-14', status: 'present', checkIn: '07:55 AM', checkOut: '03:30 PM' },
      { date: '2024-03-13', status: 'present', checkIn: '08:00 AM', checkOut: '03:30 PM' },
      { date: '2024-03-12', status: 'late', checkIn: '08:30 AM', checkOut: '03:30 PM' },
    ]
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'present':
      return 'text-green-500';
    case 'absent':
      return 'text-red-500';
    case 'late':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
}

function getStatusBadgeColor(status: string) {
  switch (status) {
    case 'present':
      return 'bg-green-100 text-green-800';
    case 'absent':
      return 'bg-red-100 text-red-800';
    case 'late':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function AttendanceSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Attendance Records</h2>
        <p className="mt-1 text-sm text-gray-500">Track your children's attendance</p>
      </div>

      <div className="space-y-6">
        {mockAttendance.map((child) => (
          <div key={child.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b">
              <h3 className="font-medium text-gray-900">{child.name}'s Attendance</h3>
            </div>

            <div className="divide-y">
              {child.attendance.map((record, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {record.status === 'present' ? (
                      <CheckCircle className={getStatusColor(record.status)} size={20} />
                    ) : record.status === 'late' ? (
                      <Clock className={getStatusColor(record.status)} size={20} />
                    ) : (
                      <XCircle className={getStatusColor(record.status)} size={20} />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{record.date}</p>
                      {record.checkIn && (
                        <p className="text-sm text-gray-500">
                          {record.checkIn} - {record.checkOut}
                        </p>
                      )}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(
                      record.status
                    )}`}
                  >
                    {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}