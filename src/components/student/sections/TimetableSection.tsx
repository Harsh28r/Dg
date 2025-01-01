import { Calendar, Clock, MapPin } from 'lucide-react';

type ClassSchedule = {
  time: string;
  subject: string;
  teacher: string;
  room: string;
};

type DaySchedule = {
  day: string;
  classes: ClassSchedule[];
};

const mockSchedule: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { time: '08:00 - 09:30', subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 101' },
      { time: '09:45 - 11:15', subject: 'Physics', teacher: 'Ms. Thompson', room: 'Room 203' },
      { time: '11:30 - 13:00', subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 02' },
      { time: '14:00 - 15:30', subject: 'English', teacher: 'Mrs. Davis', room: 'Room 105' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '08:00 - 09:30', subject: 'History', teacher: 'Mr. Wilson', room: 'Room 102' },
      { time: '09:45 - 11:15', subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 101' },
      { time: '11:30 - 13:00', subject: 'Physics Lab', teacher: 'Ms. Thompson', room: 'Lab 01' },
    ],
  },
  // Add more days as needed
];

export function TimetableSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Class Schedule</h2>
        <p className="mt-1 text-sm text-gray-500">Your weekly class timetable</p>
      </div>

      <div className="space-y-4">
        {mockSchedule.map((day) => (
          <div key={day.day} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-600" />
                <h3 className="font-medium text-blue-900">{day.day}</h3>
              </div>
            </div>
            <div className="divide-y">
              {day.classes.map((class_, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{class_.subject}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>{class_.time}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium text-gray-900">{class_.teacher}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>{class_.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}