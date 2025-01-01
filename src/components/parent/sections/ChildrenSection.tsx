import { Book, Award, TrendingUp, Clock } from 'lucide-react';

type Child = {
  id: string;
  name: string;
  grade: string;
  section: string;
  rollNumber: string;
  attendance: number;
  grades: {
    subject: string;
    grade: string;
    percentage: number;
  }[];
};

const mockChildren: Child[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    grade: '10',
    section: 'A',
    rollNumber: '1023',
    attendance: 95,
    grades: [
      { subject: 'Mathematics', grade: 'A', percentage: 92 },
      { subject: 'Science', grade: 'A-', percentage: 88 },
      { subject: 'English', grade: 'B+', percentage: 85 },
    ]
  },
  {
    id: '2',
    name: 'Emma Johnson',
    grade: '8',
    section: 'B',
    rollNumber: '824',
    attendance: 92,
    grades: [
      { subject: 'Mathematics', grade: 'A-', percentage: 89 },
      { subject: 'Science', grade: 'B+', percentage: 86 },
      { subject: 'English', grade: 'A', percentage: 91 },
    ]
  }
];

export function ChildrenSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Children Performance</h2>
        <p className="mt-1 text-sm text-gray-500">Monitor your children's academic progress</p>
      </div>

      <div className="space-y-6">
        {mockChildren.map((child) => (
          <div key={child.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{child.name}</h3>
                  <p className="text-sm text-gray-500">
                    Grade {child.grade}-{child.section} | Roll No: {child.rollNumber}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  <span className="text-sm text-blue-600">{child.attendance}% Attendance</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Book className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Subjects</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {child.grades.length}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Award className="text-green-600" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Average Grade</p>
                    <p className="text-xl font-semibold text-gray-900">A-</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="text-yellow-600" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Class Rank</p>
                    <p className="text-xl font-semibold text-gray-900">5th</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Recent Grades</h4>
                {child.grades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{grade.subject}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Grade: {grade.grade}</span>
                        <span className="text-sm text-gray-500">|</span>
                        <span className="text-sm text-gray-500">{grade.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-32">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${grade.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}