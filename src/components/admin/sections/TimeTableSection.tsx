import { useState } from 'react';
import { Calendar, Clock, User, Plus, Edit, Trash2, Building2 } from 'lucide-react';

type TimeSlot = {
  id: string;
  day: string;
  time: string;
  subject: string;
  teacher: string;
  grade: string;
  section: string;
  room: string;
};

const mockTimeSlots: TimeSlot[] = [
  {
    id: '1',
    day: 'Monday',
    time: '08:00 - 09:30',
    subject: 'Mathematics',
    teacher: 'John Smith',
    grade: '11',
    section: 'A',
    room: '101'
  },
  {
    id: '2',
    day: 'Monday',
    time: '09:45 - 11:15',
    subject: 'Physics',
    teacher: 'Sarah Johnson',
    grade: '11',
    section: 'A',
    room: '203'
  },
  {
    id: '3',
    day: 'Monday',
    time: '11:30 - 13:00',
    subject: 'Chemistry',
    teacher: 'Michael Brown',
    grade: '11',
    section: 'A',
    room: 'Lab 02'
  },
  {
    id: '4',
    day: 'Tuesday',
    time: '08:00 - 09:30',
    subject: 'English',
    teacher: 'Emma Davis',
    grade: '11',
    section: 'A',
    room: '102'
  },
  {
    id: '5',
    day: 'Tuesday',
    time: '09:45 - 11:15',
    subject: 'History',
    teacher: 'Robert Wilson',
    grade: '11',
    section: 'A',
    room: '104'
  },
  {
    id: '6',
    day: 'Wednesday',
    time: '08:00 - 09:30',
    subject: 'Computer Science',
    teacher: 'David Martinez',
    grade: '11',
    section: 'A',
    room: 'Lab 01'
  },
  {
    id: '7',
    day: 'Wednesday',
    time: '09:45 - 11:15',
    subject: 'Biology',
    teacher: 'Lisa Anderson',
    grade: '11',
    section: 'A',
    room: 'Lab 03'
  },
  {
    id: '8',
    day: 'Thursday',
    time: '08:00 - 09:30',
    subject: 'Mathematics',
    teacher: 'John Smith',
    grade: '11',
    section: 'A',
    room: '101'
  },
  {
    id: '9',
    day: 'Thursday',
    time: '09:45 - 11:15',
    subject: 'Physics',
    teacher: 'Sarah Johnson',
    grade: '11',
    section: 'A',
    room: '203'
  },
  {
    id: '10',
    day: 'Friday',
    time: '08:00 - 09:30',
    subject: 'Chemistry',
    teacher: 'Michael Brown',
    grade: '11',
    section: 'A',
    room: 'Lab 02'
  },
  {
    id: '11',
    day: 'Friday',
    time: '09:45 - 11:15',
    subject: 'English',
    teacher: 'Emma Davis',
    grade: '11',
    section: 'A',
    room: '102'
  }
];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '08:00 - 09:30',
  '09:45 - 11:15',
  '11:30 - 13:00',
  '14:00 - 15:30',
  '15:45 - 17:15'
];

interface TimeTableSectionProps {
  instituteId?: string;
}

export function TimeTableSection({ instituteId }: TimeTableSectionProps) {
  const [selectedGrade, setSelectedGrade] = useState('11');
  const [selectedSection, setSelectedSection] = useState('A');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Timetable Management</h2>
          <p className="mt-1 text-sm text-gray-500">Configure and manage class schedules</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Schedule
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border">
        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white"
        >
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white"
        >
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {weekDays.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timeSlots.map((slot) => (
                <tr key={slot}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{slot}</span>
                    </div>
                  </td>
                  {weekDays.map((day) => {
                    const schedule = mockTimeSlots.find(
                      (t) => t.day === day && 
                            t.time === slot && 
                            t.grade === selectedGrade && 
                            t.section === selectedSection
                    );
                    return (
                      <td key={`${day}-${slot}`} className="px-6 py-4 min-h-[120px]">
                        {schedule ? (
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="text-sm font-medium text-blue-900">
                                  {schedule.subject}
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-xs text-blue-700">
                                  <User size={12} />
                                  <span>{schedule.teacher}</span>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <button className="p-1 hover:bg-blue-100 rounded">
                                  <Edit className="h-4 w-4 text-blue-600" />
                                </button>
                                <button className="p-1 hover:bg-blue-100 rounded">
                                  <Trash2 className="h-4 w-4 text-red-600" />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-blue-600">
                              <Building2 size={12} />
                              <span>Room {schedule.room}</span>
                            </div>
                          </div>
                        ) : (
                          <button
                            className="w-full h-full min-h-[100px] border-2 border-dashed border-gray-200 rounded-lg 
                              flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}