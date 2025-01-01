import { Calendar } from 'lucide-react';

type Schedule = {
  day: string;
  classes: {
    time: string;
    subject: string;
    grade: string;
    room: string;
  }[];
};

const mockSchedule: Schedule[] = [
  {
    day: 'Monday',
    classes: [
      { time: '08:00 - 09:30', subject: 'Mathematics', grade: 'Grade 11-A', room: 'Room 101' },
      { time: '10:00 - 11:30', subject: 'Mathematics', grade: 'Grade 12-B', room: 'Room 203' },
      { time: '13:00 - 14:30', subject: 'Mathematics', grade: 'Grade 11-C', room: 'Room 101' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '09:00 - 10:30', subject: 'Mathematics', grade: 'Grade 12-A', room: 'Room 202' },
      { time: '11:00 - 12:30', subject: 'Mathematics', grade: 'Grade 11-B', room: 'Room 101' },
    ],
  },
  // Add more days as needed
];

export function TimetableSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Weekly Schedule</h2>
        <p className="mt-1 text-sm text-gray-500">Your teaching timetable for the week</p>
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
                    <div>
                      <p className="font-medium text-gray-900">{class_.time}</p>
                      <p className="text-sm text-gray-500">{class_.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{class_.grade}</p>
                      <p className="text-sm text-gray-500">{class_.room}</p>
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