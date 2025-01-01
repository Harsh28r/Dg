import { Book, TrendingUp, Award } from 'lucide-react';

type SubjectProgress = {
  subject: string;
  grade: string;
  percentage: number;
  teacher: string;
};

const mockProgress: SubjectProgress[] = [
  { subject: 'Mathematics', grade: 'A', percentage: 92, teacher: 'Mr. Johnson' },
  { subject: 'Physics', grade: 'A-', percentage: 88, teacher: 'Ms. Thompson' },
  { subject: 'Chemistry', grade: 'B+', percentage: 85, teacher: 'Dr. Smith' },
  { subject: 'English', grade: 'A', percentage: 90, teacher: 'Mrs. Davis' },
  { subject: 'History', grade: 'B+', percentage: 86, teacher: 'Mr. Wilson' },
];

export function ProgressReportSection() {
  const totalPercentage = mockProgress.reduce((sum, subject) => sum + subject.percentage, 0) / mockProgress.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Progress Report</h2>
        <p className="mt-1 text-sm text-gray-500">Current academic performance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-500">Overall Average</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{totalPercentage.toFixed(1)}%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-3">
            <Book className="text-green-600" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-500">Subjects</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{mockProgress.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-3">
            <Award className="text-yellow-600" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-500">Class Rank</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">5th</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h3 className="font-medium text-gray-900">Subject-wise Performance</h3>
        </div>
        <div className="divide-y">
          {mockProgress.map((subject, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{subject.subject}</p>
                  <p className="text-sm text-gray-500">Teacher: {subject.teacher}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                    Grade {subject.grade}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${subject.percentage}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-right text-gray-500">{subject.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}